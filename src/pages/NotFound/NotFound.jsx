import React from 'react';
import { Link } from 'react-router-dom';
import "./notfound.css";

const NotFound = () => {
  return (
    <div className='not-found'>
        <div className="container">
            <h1>404</h1>
            <p>Sorry, we couldn't find this page.</p>
            <Link to="/" className='button'>Return To HomePage</Link>
        </div>
    </div>
  )
}

export default NotFound