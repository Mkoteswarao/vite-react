import { Outlet } from "react-router-dom";

function Services() {
  return (
    <div> 
      <h2>Our Services</h2>

      {/* This is where <Services1 /> will render for /services/service1 */}
      <Outlet />
    </div>
  );
}
 export default Services