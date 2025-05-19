import React from 'react';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';
import Spinner from 'react-bootstrap/Spinner';

const RecipeDetails = ({ recipedata }) => {
  const { id } = useParams();
  const matched = recipedata?.find(recipe => recipe.id == id);

  if (!matched) {
    return (
      <div className="spinner-container">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
    );
  }
  let favitems = (pushingitem) => {
    let stored = localStorage.getItem("favitems");
  
  let favitems = [];

  try {
    favitems = stored ? JSON.parse(stored) : [];
  } catch (error) {
    favitems = [];
  }

  const exists = favitems.some(item => item.id === pushingitem.id);

  if (!exists) {
    favitems.push(pushingitem);
    localStorage.setItem("favitems", JSON.stringify(favitems));
    alert("Item added to fav!");
  } else {
    alert("Item is already in the fav.");
  }
}


  let cartitems=(pushingitem)=>{
     let storedCart = localStorage.getItem("cartitems");
  let cartitems = [];

  try {
    cartitems = storedCart ? JSON.parse(storedCart) : [];
  } catch (e) {
    console.error("Failed to parse cartitems from localStorage, resetting to empty array.", e);
    cartitems = [];
  }
    const exists = cartitems.some(item => item.id === pushingitem.id);

  if (!exists) {
    cartitems.push(pushingitem);
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
    alert("Item added to cart!");
  } else {
    alert("Item is already in the cart.");
  }


  }
  return (
    <div className="recipe-details-container">
      <h1 className="title">{matched.name}</h1>
      <img className="main-image" src={matched.image} alt={matched.name} />

      <div className="info-grid">
        <p><strong>🍽 Cuisine:</strong> {matched.cuisine}</p>
        <p><strong>⏱ Prep Time:</strong> {matched.prepTimeMinutes} min</p>
        <p><strong>🔥 Cook Time:</strong> {matched.cookTimeMinutes} min</p>
        <p><strong>🥣 Difficulty:</strong> {matched.difficulty}</p>
        <p><strong>📊 Calories/Serving:</strong> {matched.caloriesPerServing}</p>
        <p><strong>👥 Servings:</strong> {matched.servings}</p>
        <p><strong>⭐ Rating:</strong> {matched.rating}</p>
        <p><strong>📝 Reviews:</strong> {matched.reviewCount}</p>
        <p><strong>🍴 Meal Type:</strong> {matched.mealType.join(', ')}</p>
        <p><strong>🏷 Tags:</strong> {matched.tags.join(', ')}</p>
      </div>

      <div className="details-flex">
        <div className="ingredients-section">
          <h2>🧾 Ingredients</h2>
          <ul>
            {matched.ingredients.map((item, index) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>

        <div className="instructions-section">
          <h2>👨‍🍳 Instructions</h2>
          <ol>
            {matched.instructions.map((step, index) => (
              <li>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="action-buttons">
        <button className="btn-cart" onClick={()=>{cartitems(matched)}}>🛒 Add to Cart</button>
        <button className="btn-fav" onClick={()=>{favitems(matched)}}>❤️ Add to Favorites</button>
      </div>
    </div>
  );
};

export default RecipeDetails;
