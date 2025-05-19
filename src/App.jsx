import React from 'react'
import Navbarr from './Components/Navbar/Navbar'
import {Routes,Route} from "react-router-dom"
import Recipes from './Components/Recipes/Recipes'
import Cart from './Components/Cart/Cart'
import Favs from './Components/Favs/Favs'
import NotFound from './Components/NotFound/NotFound'
import Home from './Components/Home/Home'
import  { useState, useEffect } from 'react';
import axios from "axios"
import RecipeDetails from './Components/Recipes/RecipeDetails'


const App = () => {
  const [recipes , setRecipes] = useState([])
  // console.log(recipes)
  useEffect(()=>{

    axios("https://dummyjson.com/recipes").then(res=>{
      // console.log(res.data.recipes)
      setRecipes(res.data.recipes)
    })
  },[])
  return (
    <div>
      <Navbarr />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/recipes" element={<Recipes recipedata={recipes}/>} />
        
        <Route path='recipes/:id' element={<RecipeDetails recipedata={recipes} />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />

      </Routes>


    </div>
  )
}

export default App