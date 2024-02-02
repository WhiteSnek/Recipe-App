import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const RecipeVideos = ({ recipeVideos, name }) => {
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
      <Typography variant='h3' mb="50px">Watch <span style={{ color: '#ff2624', textTransform: 'capitalize' }}>{name}</span> recipe videos</Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center' sx={{
        flexDirection: { lg: 'row' },
        gap: { lg: '110px', xs: '0' },
      }}>
        {recipeVideos?.slice(0, 6)?.map((item, index) => (
          <a key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', borderRadius: '20px', padding: "10px" }}><img src={item.video.thumbnails[0].url} alt={item.video.title} style={{ borderRadius: '10px' }} />
            <Box>
              <Typography variant="h5" color="#000">
                {item.video.title}
              </Typography>
              <Typography variant="h7" color="#4a4646">
                {item.video.channelName}
              </Typography>
            </Box></a>))}
      </Stack>
    </Box>
  )
}

export default RecipeVideos
