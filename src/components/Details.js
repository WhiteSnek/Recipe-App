import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import Icon from '../assets/icons/logo.png'

const Details = ({ recipeDetail, recipeImage }) => {
    const { Name, Description, Time, Ingredients, Nutritions, Rating,Category,
    Cuisine } = recipeDetail
    const extraDetail = [
        {
            icon: Icon,
            name: Nutritions[0]
    },
    {
        icon: Icon,
        name: Nutritions[1]
    },
    {
        icon: Icon,
        name: Nutritions[2]
    }
    ]
return (
    <Stack gap="60px" sx={{flexDirection: {lg: 'row'},p:'20px', alignItems: 'center'}}>
            <img src={recipeImage} alt={Name} loading='lazy' className='detail-image'/>
            <Stack sx={{gap: {lg: '35px', xs: '20px'}}}>
                <Typography variant='h3' textTransform='capitalize'>
                    {Name}
                </Typography>
                <Typography variant='h6'>
                    {Description}
                </Typography>
                {extraDetail.map((item)=> (
                    <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                        <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px'}}>
                            <img src={item.icon} style={{width: '50px', height: '50px'}}/>
                        </Button>
                        <Typography textTransform='capitalize' variant='h5'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
                <Stack sx={{gap: {lg: '20px', xs: '10px'}}}>
                <Typography variant='h3' textTransform='capitalize'>Ingredients Used in {Name}</Typography>
                {Ingredients.map((item)=>(
                    <Typography textTransform='capitalize' variant='h5'>{item}</Typography>
                ))}
                </Stack>
                <Stack sx={{gap: {lg: '15px', xs: '5px'}}}>
                <Typography variant='h6' textTransform='capitalize'><span style={{color: '#ff2625'}}>Category:</span> {Category}</Typography>
                <Typography variant='h6' textTransform='capitalize'><span style={{color: '#ff2625'}}>Rating:</span> {Rating} </Typography>
                <Typography variant='h6' textTransform='capitalize'><span style={{color: '#ff2625'}}>Cuisine:</span> {Cuisine} </Typography>
                </Stack>
            </Stack>
        </Stack>
)
}

export default Details
