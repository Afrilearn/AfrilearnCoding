import React from 'react';
import navdata from './MainNavData';
import Button from '@mui/material/Button';
import './navbar.css';

const MainNavbar = () => {
  return (
    <div className="mainnavbar">
        <div className="logo">
            Afrilearn
        </div>
        {navdata && navdata.map((data) => 
        <ul>
            <li>{data.title}</li>
        </ul>
        )}
        <Button variant="contained">Apply Now</Button>
    </div>
  )
}

export default MainNavbar