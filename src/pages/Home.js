import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchRecipe from '../components/SearchRecipe'
import Recipes from '../components/Recipes'

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [cuisine, setCuisine] = useState('all');
  return (
    <Box>
      <HeroBanner />
      <SearchRecipe setRecipes={setRecipes} cuisine={cuisine} setCuisine={setCuisine}/>
      <Recipes recipes={recipes} setRecipes={setRecipes} cuisine={cuisine} />
    </Box>
  )
}

export default Home
