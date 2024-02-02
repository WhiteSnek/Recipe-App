import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { recipeOptions, fetchData, googleOptions } from '../utils/fetchData';
import RecipeCard from './RecipeCard';

const Recipes = ({ recipes, setRecipes, cuisine }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipePerPage] = useState(1);

  useEffect(() => {
    const fetchRecipeData = async () => {
      let recipeData = [];
      let recipeDataArray = [];
      if (cuisine === 'all') {
        let response = await fetchData(
          'https://all-in-one-recipe-api.p.rapidapi.com/categories',
          recipeOptions
        );
        let categoriesArray = response.categories.data.slice(0,2);
        console.log(categoriesArray)
        categoriesArray.map((category) => {
          const fetchCategoryData = async () => {
            recipeData = await fetchData(
              `https://all-in-one-recipe-api.p.rapidapi.com/categories/${category}`,
              recipeOptions
            );
            recipeDataArray = recipeData.categories.data.slice(0,2);
            console.log(recipeDataArray[0])
          }
          fetchCategoryData();
        })
      } else {
        recipeData = await fetchData(
          `https://all-in-one-recipe-api.p.rapidapi.com/cuisines/${cuisine}`,
          recipeOptions
        );
        let recipeDataObj = recipeData.cuisines.data;
        recipeDataArray = recipeDataObj
          .filter(obj => obj !== null)
          .map(recipeDataObj => Object.values(recipeDataObj));
        // console.log(recipeDataArray)
      }

      setRecipes(recipeDataArray);

    };
    fetchRecipeData();
  }, [cuisine]);

  // Pagination
  const indexOfLastRecipe = currentPage * recipePerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipePerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }
  return (
    <Box id="recipes" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentRecipes.map((recipe, idx) => (
          <RecipeCard key={idx} recipe={recipe[1]} id={recipe[0]} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {recipes.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(recipes.length / recipePerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Recipes
