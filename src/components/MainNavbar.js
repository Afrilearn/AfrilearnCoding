import React from 'react';
import navdata from './MainNavData';
import { NavLink } from 'react-router-dom';
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
            <li ><NavLink to={data.url} key={data.id}>{data.title}</NavLink></li>
        </ul>
        )}
        <Button variant="contained" href="https://myafrilearn.com/register">Apply Now</Button>
    </div>
  )
}

export default MainNavbar