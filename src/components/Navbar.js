import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/icons/logo.png'
const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{gap: {sm: '50px', xs:'40px'}, mt: {sm: '10px', xs: '20px'}, justifyContent:"none"}} px="20px">
      <Link to="/">
        <img src={Logo} alt="logo" style={{width: '100px', height: '100px'}} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="25px" alignItems="flex-end">
        <Link to="/" style={{textDecoration: 'none', color: '#ff2625'}}> Home
        </Link>
        <Link to="/" style={{textDecoration: 'none', color: '#ff2625'}}> Recipes
        </Link>
      </Stack>
    </Stack>
  )
}

export default Navbar
