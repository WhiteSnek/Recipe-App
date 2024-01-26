import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchRecipe from '../components/SearchRecipe'
import Recipes from '../components/Recipes'

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchRecipe />
      <Recipes />
    </Box>
  )
}

export default Home
