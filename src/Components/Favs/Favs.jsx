import React from 'react';
import Table from 'react-bootstrap/Table';

const Favs = () => {
  let favitems = JSON.parse(localStorage.getItem("favitems")) || [];

  const addToCart = (item) => {
    let storedCart = localStorage.getItem("cartitems");
    let cartitems = [];

    try {
      cartitems = storedCart ? JSON.parse(storedCart) : [];
    } catch (e) {
      console.error("Failed to parse cartitems from localStorage, resetting to empty array.", e);
      cartitems = [];
    }

    const exists = cartitems.some(cartItem => cartItem.id === item.id);

    if (!exists) {
      cartitems.push(item);
      localStorage.setItem("cartitems", JSON.stringify(cartitems));
      alert("Item added to cart!");
    } else {
      alert("Item is already in the cart.");
    }
  };

  return (
    <div className="p-4">
      <h2 style={{ textAlign: "center" }}>Your Favourites</h2>
      {favitems.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Dish Name</th>
              <th>Image</th>
              <th>Cuisine</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {favitems.map((val, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{val.name}</td>
                <td>
                  <img src={val.image} alt={val.name} style={{ width: "100px", height: "auto" }} />
                </td>
                <td>{val.cuisine}</td>
                <td>
                  <button className="btn btn-success" onClick={() => addToCart(val)}>
                    🛒 Add to Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p style={{ textAlign: 'center' }}>Your Favourites list is empty.</p>
      )}
    </div>
  );
};

export default Favs;
