import React, { useEffect, useState } from 'react'
import { Stack, Box, Typography, TextField, Button } from '@mui/material'
import { fetchData, recipeOptions } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchRecipe = ({ setRecipes, cuisine, setCuisine }) => {
    const [search, setSearch] = useState('');
    const [cuisines, setCuisines] = useState([]);

    useEffect(() => {
        const fetchRecipeData = async () => {
            const cuisineData = await fetchData('https://all-in-one-recipe-api.p.rapidapi.com/cuisines', recipeOptions);
            // this will give the array in the object ie cuisines
            const cuisineDataArray = cuisineData.cuisines.data;
            // updates the value of cuisines to new array
            console.log(cuisineDataArray)
            setCuisines(cuisineDataArray);

        }
        fetchRecipeData();

    }, [])

    const handleSearch = async () => {
        if (search) {
            const recipeData = await fetchData(`https://all-in-one-recipe-api.p.rapidapi.com/search/${search}`, recipeOptions);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
            setSearch('');
            console.log(recipeData)
            setRecipes(recipeData);
        }
    }
    return (
        <Stack alignItems='center' justifyContent='center' p="20px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '50px', xs: '30px' } }} mb="50px" textAlign="center">
                Unleash kitchen brilliance with these <br /> game-changing recipes.
            </Typography>
            <Box position="relative" mb="75px">
                <TextField height="76px"
                    sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px', }, width: { lg: '1000px', xs: '300px' }, backgroundColor: '#fff', borderRadius: '40px' }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder='Search Recipes'
                    type='text' />
                <Button className='search-btn' sx={{ bgcolor: '#ff2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px', height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } } }} onClick={handleSearch}>
                    Search
                </Button>

            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollBar data={cuisines} setCuisine={setCuisine} cuisine={cuisine} isCuisine />
            </Box>
        </Stack>
    )
}

export default SearchRecipe
