import React from 'react';
import navdata from './MainNavData';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import  logo  from '../images/logo.png';
import './navbar.css';

const MainNavbar = ({ scrollToSection, faq, courses, process, lPath }) => {
 

  return (
    <div className="mainnavbar">
        <div className="logo">
        <NavLink to="/" >
          <img
              src={logo}
              width={160}
            />
        </NavLink>
        </div>
        <div className="wrapper-ul">
          <ul>
            <li onClick={() => scrollToSection(lPath)}>ABOUT KIDSCODE</li>
            <li onClick={() => scrollToSection(faq)}>FAQ</li>
            <li onClick={() => scrollToSection(courses)}>COURSE CONTENT</li>
            <li onClick={() => scrollToSection(process)}>ADMISSION PROCESS</li>
          </ul>
        </div>
        <Button variant="contained" href="https://myafrilearn.com/register" className="btn-navbar main-nav-btn">Sign up now</Button>
    </div>
  )
}

export default MainNavbar