import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import HeroBannerImage from '../assets/images/hero-banner-img.png'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '100px', xs: '70px'},
        ml: {sm: '50px'}
    }} position='relative' p="20px">
        <Typography color="#ff2625" fontWeight="600" fontSize="26px">
            Flavor Fiesta
        </Typography>    
        <Typography variant='h3' fontWeight={700} mb="23px" mt="30px">
        Your Guide to <br/> Gourmet
        </Typography>
        <Typography fontSize="22px" lineHeight="25px" mb={4}>
            Check out the most delicious recipes
        </Typography>
        <Button variant='contained' color="error" href="#recipes" behavior="smooth" sx={{ backgroundColor: '#ff2625', padding: '10px'}}>
            Explore Recipes
        </Button>
        <Typography fontWeight={600} color="#ff2625" sx={{
            opacity: 0.1,
            display: {lg: 'block', xs: 'none'}
        }} fontSize="200px">
            Recipes
        </Typography>
        <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
