import React from 'react'
import Table from 'react-bootstrap/Table';
const Cart = () => {
  let cartitems = JSON.parse(localStorage.getItem("cartitems"))
  console.log(cartitems);
  
  return (
       <div className="p-4">
      <h2 style={{textAlign:"center"}}>Your Cart</h2>
      {cartitems.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Dish Name</th>
              <th>Image</th>
              <th>Cuisine</th>
            </tr>
          </thead>
          <tbody>
            {cartitems.map((val, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{val.name}</td>
                <td>
                  <img src={val.image} alt={val.name} style={{ width: "100px", height: "auto" }} />
                </td>
                <td>{val.cuisine}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};


export default Cart