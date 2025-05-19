import React from "react";
import Table from "react-bootstrap/Table";
import "./Cart.css";
const Cart = () => {
  let cartitems = JSON.parse(localStorage.getItem("cartitems"));
  // console.log(cartitems);
  let favitems = (pushingitem) => {
    let stored = localStorage.getItem("favitems");
    let favitems = [];

    try {
      favitems = stored ? JSON.parse(stored) : [];
    } catch (error) {
      favitems = [];
    }

    const exists = favitems.some((item) => item.id === pushingitem.id);

    if (!exists) {
      favitems.push(pushingitem);
      localStorage.setItem("favitems", JSON.stringify(favitems));
      alert(`${pushingitem.name} added to fav!`);
    } else {
      alert(`${pushingitem.name} is already in the fav.`);
    }
  };
  const removeFromCart = (itemToRemove) => {
    const updatedCart = cartitems.filter((item) => item.id !== itemToRemove.id);
    localStorage.setItem("cartitems", JSON.stringify(updatedCart));
    window.location.reload(); // Refresh to update UI
  };
  return (
    <div className="p-4">
      <h2 style={{ textAlign: "center" }}>Your Cart</h2>
      {cartitems.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Dish Name</th>
              <th>Image</th>
              <th>Cuisine</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartitems.map((val, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{val.name}</td>
                <td>
                  <img
                    src={val.image}
                    alt={val.name}
                    style={{ width: "100px", height: "auto" }}
                  />
                </td>
                <td>{val.cuisine}</td>
                <td>
                  <button
                    className="btn btn-success me-2"
                    onClick={() => favitems(val)}
                  >
                    ❤️ Add to Favorites
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(val)}
                  >
                    🗑️ Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="empty-cart-msg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
