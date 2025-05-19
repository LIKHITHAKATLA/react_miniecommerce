import React, { useEffect, useState } from 'react'
import "./Recipes.css"
import Recipe from './Recipe'
const Recipes = ({recipedata}) => {

  return (
    <div className="recipes-container">
      {recipedata.map((val) => (
        <Recipe key={val.id} singledetails={val} />
      ))}
    </div>
   
  )
}

export default Recipes