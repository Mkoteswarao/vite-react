import * as React from 'react';
import Box from '@mui/joy/Box';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';  
import TabPanel from '@mui/joy/TabPanel';
import pageheader from '../assets/images/car.png'; // Import your image
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import tabcar1 from '../assets/images/aboutimgs/our-vision-img.jpg';
import tabcar2 from '../assets/images/aboutimgs/our-mission-img.jpg';
import tabcar3 from '../assets/images/aboutimgs/our-approach-img.jpg';
 

export default function TabsBottomNavSection() {
  const [index, setIndex] = React.useState(0);
  const colors = ['primary', 'danger', 'success', 'warning'];
  return (
    <Box
      sx={{
        flexGrow: 1,
        // m: -3,
        p: 4, 
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px', 
      }}
      style={{ '--colors-index': colors[index] }}
    >
      <Tabs
        size="lg"
        aria-label="Bottom Navigation" 
        value={index}
        onChange={(event, value) => setIndex(value)}
        sx={(theme) => ({
          p: 1,
          borderRadius: 16,
          // maxWidth: 400,
          mx: 'auto',
          boxShadow: theme.shadow.sm,
          bgcolor: 'transparent', 
          '--joy-shadowChannel': theme.vars.palette[colors[index]].darkChannel,
          [`& .${tabClasses.root}`]: {
            
 flex: 1, // Each tab takes equal width
      minWidth: 160, // Minimum width for each tab (adjust as needed)
      maxWidth: 220, // Maximum width for each tab (optional)
      py: 1.5, 
      mx: 0.5, 
      transition: '0.3s',
      fontWeight: 'md',
      fontSize: 'md',
      color: '#fff', // Default tab text color
      bgcolor :'rgb(0, 0, 0);', // Default tab background
      [`&.${tabClasses.selected}`]: {
        bgcolor: '#d21919', // Active tab background color (change as needed)
        color: '#fff',       // Active tab text color
      },

            [`&:not(.${tabClasses.selected}):not(:hover)`]: {
              opacity: 0.7,
            },
          },
        })}
      >
        <TabList
          variant="plain"
          size="sm"  
          disableUnderline
          sx={{ borderRadius: 'lg', color:'#fff', p: 1, mx : 'auto', bgcolor :'rgb(29, 29, 29);',borderRadius: '36px',}}
        >
          <Tab
            disableIndicator
            orientation="vertical"
            {...(index === 0 && { color: colors[0] })}
          >
          
            Our Vision
          </Tab>
          <Tab
            disableIndicator
            orientation="vertical"
            {...(index === 1 && { color: colors[1] })}
          >
           
            Our Mission
          </Tab>
          <Tab
            disableIndicator
            orientation="vertical"
            {...(index === 2 && { color: colors[2] })}
          >
         
            Our Approach
          </Tab>
        
        </TabList>

        <TabPanel value={0}>
          <div>
            <div className="container">
              <div className="row">
                
                 <div className="col-md-6">
                 <h5>Our Vision</h5>
                  <Box  sx={{ color: '#fff', fontWeight: 'bold' }}>
                  <h2   >Welcome to Our  Page</h2>
                 
                 </Box> 
                  <p>
                    This is the home page content. Here you can find the latest updates and news.
                  </p>
                  <p>
                    Explore our features and services that we offer to enhance your experience.
                  </p>
                 </div>
                 <div className="col-md-6">
                  <Box sx={{ borderRadius: '36px' }}>
                  <img src={tabcar1} alt=""  className='img-fluid tabimg'   />
                  </Box>
                </div>
              </div>
              </div>
          </div>
        </TabPanel>
        <TabPanel value={1}>
          <div>
                  <div className="container">
              <div className="row">
               
                 <div className="col-md-6">
                  <h5>Our Mission</h5>
                  <Box  sx={{ color: '#fff', fontWeight: 'bold' }}>
                  <h2   >Welcome to Our  Page</h2>
                 
                 </Box> <p>
                    This is the home page content. Here you can find the latest updates and news.
                  </p>
                  <p>
                    Explore our features and services that we offer to enhance your experience.
                  </p>
                 </div>
                  <div className="col-md-6">
                  <img src={tabcar2} alt=""  className='img-fluid tabimg'/>
                </div>
              </div>
              </div>

          </div>
        </TabPanel>
        <TabPanel value={2}>
          <div>
              <div className="container">
              <div className="row">
                
                 <div className="col-md-6">
                 <h5>Our Approach</h5>
                  <Box  sx={{ color: '#fff', fontWeight: 'bold' }}>
                  <h2 >Welcome to Our  Page</h2>
                 
                 </Box> 
                  <p>
                    This is the home page content. Here you can find the latest updates and news.
                  </p>
                  <p>
                    Explore our features and services that we offer to enhance your experience.
                  </p>
                 </div>
                 <div className="col-md-6">
                  <img src={tabcar3} alt=""  className='img-fluid tabimg'/>
                </div>
              </div>
              </div>
          </div>
        </TabPanel>
        
      </Tabs>
    </Box>
  );
}
