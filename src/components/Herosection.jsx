import React from 'react'
import Hero from './Hero'
import Heroinfo from './Heroinfo'
import { Container } from '@mui/material';
 
import Box from '@mui/material/Box';
const Herosection = () => {
  return (
    <div className='Hero_section'> 
       <Container maxWidth="xl">
      <Box sx={{
        display: 'flex',
        alignItems: 'center', // vertical centering
        justifyContent: 'center', // optional: horizontal centering
       my: 13, 
      }}>
           <Heroinfo />
         <Hero />
     
   </Box>
   </Container>
   </div>

  )
}

export default Herosection