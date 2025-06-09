import React from 'react' 
import Blog from '../components/Blog';
import Gallery from '../components/Gallery'
import Footer from '../components/Footer';
import Herosection from '../components/Herosection';
const Home = () => {
  return (
    <div> 
 
 <Herosection />
<Blog />
 <Gallery />
 <Footer />
    </div>
  )
}

export default Home;