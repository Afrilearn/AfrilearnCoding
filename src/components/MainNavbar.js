import React from 'react';
import navdata from './MainNavData';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import  logo  from '../images/logo.png';
import './navbar.css';

const MainNavbar = ({ scrollToSection, faq }) => {
  return (
    <div className="mainnavbar">
        <div className="logo">
        <NavLink to="/" >
          <img
              src={logo}
              width={110}
            />
        </NavLink>
        </div>
        {navdata && navdata.map((data) => 
        <ul >
          {/* <li onClick={() => scrollToSection(faq)}>APPLY</li>
          <li onClick={() => scrollToSection(faq)}>FAQ</li>
          <li onClick={() => scrollToSection(faq)}>COURSE CONTENT</li>
          <li onClick={() => scrollToSection(faq)}>FAQ</li> */}
            <li ><NavLink to={data.url} key={data.id}>{data.title}</NavLink></li>
        </ul>
        )} 
        <Button variant="contained" href="https://myafrilearn.com/register" className="btn-navbar">Sign up now</Button>
    </div>
  )
}

export default MainNavbar