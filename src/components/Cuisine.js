import React from 'react'
import {Stack, Typography} from '@mui/material'
import indian from '../assets/images/indian.jpg'
import japanese from '../assets/images/japanese.jpg'
import greek from '../assets/images/greek.jpg'
import jewish from '../assets/images/jewish.jpg'
import indonesian from '../assets/images/indonesian.jpg'
import israeli from '../assets/images/israeli.jpg'
import italian from '../assets/images/italian.jpg'
import jamaican from '../assets/images/jamaican.jpeg'
import korean from '../assets/images/korean.jpg'
import lebanese from '../assets/images/lebanese.jpg'

const cuisineImages = { greek, indian, indonesian, israeli, italian, jamaican, japanese, jewish, korean, lebanese}

const Cuisine = ({item, setCuisine, cuisine, image}) => {
  const cuisineImage = cuisineImages[item] || null;
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={cuisine === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setCuisine(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}>
      <img src={cuisineImage} alt={item} style={{width: '150px', height: '150px', borderRadius: '20px'}}/>
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item?item:'Null'}</Typography>
    </Stack>
  )
}

export default Cuisine
