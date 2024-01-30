import React, { useContext } from 'react'
import { Typography,Box } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import Cuisine from './Cuisine'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png'; 
const LeftArrow = () => {

  const { scrollPrev } = useContext(VisibilityContext);

  return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
          <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
          <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
  );
};

const HorizontalScrollBar = ({data,cuisine,setCuisine, isCuisine}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item)=>
       ( <Box 
          key={item}
          title={item}
          itemId ={item}
          m="0 40px">
            <Cuisine item={item} setCuisine={setCuisine} cuisine={cuisine} />
        </Box>)
      )}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar
