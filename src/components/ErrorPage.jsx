import React from 'react';
import errorImage from '../assets/cat-yarn-error.jpeg'
import './ErrorPage.scss';
import { Outlet, Link } from "react-router-dom";

const navigateToPath = () => {
    
}
const ErrorPage = () => {
  return (
    <div className="error-page-container">
      <h1 className="error-text">Oop! 404 Not Found</h1>
      <Link to={`/`}>Take Me Home</Link>

      {/* <button className="link-btn" onClick={() => navigateToPath('/')}>
            Take Me Home
      </button>    */}

      <div className="img-container">
        <img src={errorImage}/>
      </div>
      {/* You can add more content or styling for your error page */}
    </div>
  );
};

export default ErrorPage;
