import { Outlet } from "react-router-dom";

function Services() {
  return (
    <div > 
      <div className="container-fluid">
      <h2>  <div className="page-header"> 
        <div className='page-header-box'>
       <h1>Services Us</h1>
      <p>Welcome to our website! We are dedicated to providing the best service possible.</p>
       </div>

       </div></h2>

      {/* This is where <Services1 /> will render for /services/service1 */}
      <Outlet />
    </div>
    </div>
  );
}
 export default Services