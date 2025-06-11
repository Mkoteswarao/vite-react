import React from 'react' 
import TabsBottomNavSection from '../components/TabsBottomNavSection';

const About = () => {
  return (
    <div>
        <div className="container-fluid"> 
       <div className="page-header"> 
        <div className='page-header-box'>
       <h1>About Us</h1>
      <p>Welcome to our website! We are dedicated to providing the best service possible.</p>
       </div>

       </div>

        <div className="page-content">
          <div className="tabs-section">
          <TabsBottomNavSection />
          </div>
        </div>
       
    </div>
    </div>
  )
}

export default About;