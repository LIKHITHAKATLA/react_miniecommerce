import React from 'react';
import './Recipes.css';
import { useNavigate } from 'react-router-dom';
const Recipe = ({ singledetails }) => {
    let navigate = useNavigate();
  return (
    <div className="recipe-card">
      <img className="recipe-image" src={singledetails.image} alt={singledetails.name} />
      <div className="recipe-content">
        <h1 className="recipe-title">{singledetails.name}</h1>
        <div className="recipe-meta">
          <span>⭐ {singledetails.rating}</span>
          <span>📝 {singledetails.reviewCount} reviews</span>
        </div>
        <button onClick={()=>{navigate(`/recipes/${singledetails.id}`)}}>More Details</button>
      </div>
    </div>
  );
};

export default Recipe;
