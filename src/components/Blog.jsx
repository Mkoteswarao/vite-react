import React from 'react' 
import '../assets/css/blogstyle.css';
import '../assets/css/blogbootstrap4.css'
import { Container, Typography } from '@mui/material';
 

import car5 from '../assets/images/car5.jpg'; 
import car4 from '../assets/images/car4.jpg';


const Blog = () => {
  return (
    <div>
   <section className="about-section py-5">
     <Container maxWidth="xl"> 
        <div className="about-inner animated-text">
            <Typography 
             variant="h3" 
             fontWeight={600}
               color='white'
             > 
            
                 About Us – 
            </Typography>
            <Typography
             variant="h6"
            color='#838383'
             fontWeight={500}
             fontSize={15}>
                Discover the World of Cars
            </Typography>

          <div className="row no-gutters">
            <div className="col-md-7">
              <div className="about-text animated-text">
                <h3 className="about-title ">Ferrari</h3>
                <p>Ferrari is more than just a car—it's a symbol of speed, power, 
                    and Italian craftsmanship. Founded in 1947 by Enzo Ferrari, the brand is known for 
                    producing high-performance sports cars that blend cutting-edge 
                    engineering with unmistakable style.</p> 
              </div>
           
            </div>
            <div className="col-md-5">
              <div className="about-img"> 
                <img src={car5} alt="" />
              </div>
            </div>

          </div>
        </div>
        <div className="about-inner-2">
          <div className="row no-gutters align-items-center">
            <div className="col-md-7">
              <div className="about-img">
                 <img src={car4} alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="about-text animated-text pb-0">
                <h3 className="about-title"  >  Ferrari</h3>
                <p  > Ferrari is more than just a car—it's a symbol of speed, power, 
                    and Italian craftsmanship. Founded in 1947 by Enzo Ferrari, the brand is known for 
                    producing high-performance sports cars that blend cutting-edge 
                    engineering with unmistakable style.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>


    </div>
  )
}

export default Blog