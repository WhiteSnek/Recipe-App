import React, { useEffect, useState } from 'react'
import { Stack, Box, Typography, TextField, Button } from '@mui/material'
import { fetchData, recipeOptions } from '../utils/fetchData';

const SearchRecipe = ({setRecipes}) => {
    const [search, setSearch] = useState('');

    useEffect(()=> {
        const fetchRecipeData = async ()=>{
            
        }
    })

    const handleSearch = async () => {
        if(search){
            const recipeData = await fetchData('https://low-carb-recipes.p.rapidapi.com/search?limit=20', recipeOptions);

            const searchedRecipes = recipeData.filter(
                (item) => item.name.toLowerCase().includes(search)
                || item.tags[0].toLowerCase().includes(search)
                // || item.nutrients.toLowerCase().includes(search)
            )

            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})

            setSearch('');
            console.log(searchedRecipes)
            setRecipes(searchedRecipes);
        }
    }
  return (
    <Stack alignItems='center' justifyContent='center' p="20px">
        <Typography fontWeight={700} sx={{fontSize: {lg: '50px', xs: '30px'}}} mb="50px" textAlign="center">
        Unleash kitchen brilliance with these <br/> game-changing recipes.
        </Typography>
        <Box position="relative" mb="75px">
            <TextField height="76px"
            sx={{ input: {fontWeight: '700', border: 'none', borderRadius: '4px',}, width: {lg: '1000px', xs: '300px'}, backgroundColor: '#fff', borderRadius: '40px'}}
            value={search}
            onChange={(e)=> setSearch(e.target.value.toLowerCase())}
            placeholder='Search Recipes'
            type='text' />
                <Button className='search-btn' sx={{bgcolor: '#ff2625', color: '#fff', textTransform: 'none', width: {lg: '173px', xs: '80px', height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px',xs: '14px'}}}} onClick={handleSearch}>
                    Search
                </Button>
        </Box>
    </Stack>
  )
}

export default SearchRecipe
