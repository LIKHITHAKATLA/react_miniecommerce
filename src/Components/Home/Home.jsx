import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

   const handle=()=>{
        navigate("/recipes")
    }

  return (
    <div className="home-container">
      <h1>Welcome to TastyBite</h1>
      <p>
        Discover a world of delicious recipes, curated favorites, and easy-to-follow cooking guides.
        Whether you're a seasoned chef or just starting out, TastyBite helps you find inspiration for your next meal.
      </p>
      <button onClick={handle}>Explore Recipes</button>
      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        alt="Delicious food"
        className="home-image"
      />
    </div>
  );
};

export default Home;
