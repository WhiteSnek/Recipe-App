import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Details from '../components/Details';
import RecipeVideos from '../components/RecipeVideos';
import { fetchData, recipeOptions, youtubeOptions } from '../utils/fetchData';
import axios from 'axios';

const RecipeDetail = () => {
  const [recipeDetail, setRecipeDetail] = useState({});
  const [recipeVideos, setRecipeVideos] = useState([]);
  const [recipeImage, setRecipeImage] = useState('');
  const { id } = useParams(); // Destructure id directly
  // console.log(id)
  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const recipeDetailData = await fetchData(`https://all-in-one-recipe-api.p.rapidapi.com/details/${id}`, recipeOptions);
        setRecipeDetail(recipeDetailData.recipe.data);
        
        const recipeVideoData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${recipeDetailData.recipe.data.Name} recipe`, youtubeOptions);
        // console.log(recipeVideoData.contents)
        setRecipeVideos(recipeVideoData.contents);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipeData();
    // console.log(recipeDetail)
  }, [id]);
  useEffect(() => {
    const fetchRecipeImage = async () => {
      try {
        const response = await axios.get('https://real-time-image-search.p.rapidapi.com/search', {
          params: {
            query: recipeDetail.Name,
          },
          headers: {
            'X-RapidAPI-Key': 'b60d0223eemsh9c18175293dcb1bp1f74efjsnfb0912c41235',
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
  }, [recipeDetail.Name]);
  return (
    <Box>
      <Details recipeDetail={recipeDetail} recipeImage={recipeImage} />
      <RecipeVideos recipeVideos={recipeVideos} name={recipeDetail.Name} />
    </Box>
  );
};

export default RecipeDetail;
