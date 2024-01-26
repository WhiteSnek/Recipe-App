import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchRecipe from '../components/SearchRecipe'
import Recipes from '../components/Recipes'

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchRecipe setRecipes={setRecipes} />
      <Recipes />
    </Box>
  )
}

export default Home
