import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import car from '../assets/images/car.png'

const ResponsiveAppBar = () => {
  return (
    <div className='navbar'>
      <Container maxWidth="xl">
        <nav className="navbar navbar-expand-lg navbar-light py-0 ">
          <Link className="navbar-brand" to="/">
               <img src={car} alt="logo" height={40} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
           
              <li className="nav-item">
                <Link to="/login" className='nav-link btn btn-primary'> Login </Link>
              </li>
            </ul>
            
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default ResponsiveAppBar;
