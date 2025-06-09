import React from 'react'
 import { Box, Button, Typography } from '@mui/material'
const Heroinfo = () => {
  return (
    <div className='animated-text'>
         <Typography
            variant="h2"
           fontFamily="Poppins, sans-serif"
           fontWeight="600"
           color='white'
           mb={1}
          >
           Explore Without Limits
          </Typography>
          
         <Typography
            variant="h4" 
            color='#838383'
            mb={1}
          >
           Every Mile, a Memory
          </Typography>
         <Typography
            variant="h6"
            fontSize={16} 
             color='#838383'
             mb={1}
          >
           At AutoVerse,
            we believe a car is more than just a vehicle — it’s a reflection 
            of your lifestyle, personality, and passion. From sleek sports
             cars to family SUVs, we bring you the best in performance, design, and technology.
          </Typography>
        <Box sx={{displsy:{md:'flex', sm:'bloxk', }, marginTop:'20px'}}> 
          <Button sx={{ backgroundColor: '#004085', color: '#fff', borderRadius:'10px', 
          textTransform:'initial', letterSpacing:'2px',fontSize:'15px' }}>
         Explore 
      </Button>
        <Button sx={{ backgroundColor: '#004085', color: '#fff', borderRadius:'10px', 
          textTransform:'initial', letterSpacing:'2px',fontSize:'15px', marginLeft:'15px' }}>
         Registar 
      </Button>
        </Box>
        

    </div>
  )
}

export default Heroinfo