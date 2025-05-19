import React from 'react';
import './NotFound.css'; 


const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src="https://th.bing.com/th/id/OIP.K4jXSK4XQahOLPEliCtvlwHaHa?rs=1&pid=ImgDetMain" alt="Page not found" className="not-found-image" />
      <h1>Oops! Page Not Found</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
    </div>
  );
};

export default NotFound;
