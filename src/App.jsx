
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ResponsiveAppBar from "./components/ResponsiveAppBar" 
import Services from './pages/Services';
import Services1 from './pages/Services1';
import Contact from './pages/Contact';
import Login from './pages/Login';
 
 
function App() {
     
  return ( 
    <> 
   <ResponsiveAppBar />
<Routes>
  <Route path="/" element={ <Home />} />
  <Route path="/about" element={ <About />} />
  <Route path='/services' element={<Services /> } /> 
  <Route path='/services' element={<Services /> } /> 
  <Route path='/contact' element={<Contact /> } /> 
  <Route path='/login' element={<Login /> } /> 


  <Route path="*" element={ <h1>404 page</h1>} />
</Routes>
 
 
  
    </>
  )
}

export default App
