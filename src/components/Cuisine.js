import React from 'react'
import {Stack, Typography} from '@mui/material'
import Icon from '../assets/icons/logo.png'

const Cuisine = ({item, setCuisine, cuisine}) => {
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
      <img src={Icon} alt="cuisine" style={{width: '80px', height: '80px'}}/>
      <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item?item:'Null'}</Typography>
    </Stack>
  )
}

export default Cuisine
