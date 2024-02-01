import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import axios from 'axios';

const RecipeCard = ({ recipe, id }) => {
  const [recipeImage, setRecipeImage] = useState('');

  useEffect(() => {
    const fetchRecipeImage = async () => {
      try {
        const response = await axios.get('https://real-time-image-search.p.rapidapi.com/search', {
          params: {
            query: recipe,
          },
          headers: {
            'X-RapidAPI-Key': '0072b00d01mshf43674982c0aa50p15b915jsnb7b15a2259ee',
            'X-RapidAPI-Host': 'real-time-image-search.p.rapidapi.com'
          }
        });
        
        // Assuming the API response has an array of images and you want the first one
        const imageUrl = response.data.data && response.data.data.length > 0
          ? response.data.data[0].url
          : '...';
        setRecipeImage(imageUrl);
        
      } catch (error) {
        console.error('Error fetching recipe image:', error);
        // Set a default image or handle the error in another way
        setRecipeImage(''); // Set a default image or handle the error in another way
      }
    };

    fetchRecipeImage();
  }, [recipe]);
  console.log(id)
  return (
    <Link className="exercise-card" to={`/recipe/${id}`}>
      <img src={recipeImage} alt={recipe} loading="lazy" style={{borderRadius: '20px', padding:'20px'}}/>
      <Stack direction="row">
        <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {recipe}
        </Button>
        <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
          {recipe}
        </Button>
      </Stack>
      <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
        {recipe}
      </Typography>
    </Link>
  );
};

export default RecipeCard;
