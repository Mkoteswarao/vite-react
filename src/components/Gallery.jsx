import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Box, Container} from '@mui/material';


 
import car5 from '../assets/images/car5.jpg';
import car2 from '../assets/images/car2.jpg';
import car3 from '../assets/images/car3.jpg';
import car4 from '../assets/images/car4.jpg';
import { Typography } from '@mui/material'; 


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <Container maxWidth='xl'>
   <Box sx={{display: 'flex',
        // alignItems: 'center',  
        justifyContent: 'space-between',
        pt:7}}>
    
    <div  className='gallery_content' >
        <Typography
     variant='h3'
     fontWeight={600}
      marginBottom={1}
      color='white'
      pb={4}
     >
       Gallery –  
     </Typography>
     <Typography
     variant='h5'  
      marginBottom={1}
      color='#838383'
     >
       Explore Our Stunning Collection of Cars 
     </Typography>
     <Typography
     variant='h6' 
     color='gray'
     fontSize={16}
   
     >
      Instead of just focusing on the features, make
       sure you're including the kinds of details that matter most to used car shoppers. Be clear about the mileage.
       Mention the ownership history; if it's a one-owner vehicle, that's a major selling point. <br />
       Instead of just focusing on the features, make
       sure you're including the kinds of details that matter most to used car shoppers. Be clear about the mileage.
      
     </Typography>

    </div>
     
     <div>
        <ImageList
      sx={{  height: 500 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    > 
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          
          <img
            {...srcset(item.img, 121,  item.rows, item.cols)}
            alt={item.title} 
            loading="lazy"
         
          />
         
        </ImageListItem>
      ))}
    </ImageList>
     </div>
    
    </Box>
    </Container>
  );
}

const itemData = [
  {
    img: car5,
    title: 'Breakfast',
    rows: 2,
    cols: 2,
    a: 'https://google.com'
  },
  {
    img: car4,
    title: 'Burger',
  },
  {
    img: car3,
    title: 'Camera',
  },
  {
    img: car2,
    title: 'Coffee',
    cols: 2,
  },
  {
    img: car3,
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];
