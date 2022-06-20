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
              width={110}
            />
        </NavLink>
        </div>
        {/* {navdata && navdata.map((data) =>  */}
        <div className="wrapper-ul">
          <ul>
            <li onClick={() => scrollToSection(lPath)}>LEARNING PATH</li>
            <li onClick={() => scrollToSection(faq)}>FAQ</li>
            <li onClick={() => scrollToSection(courses)}>COURSE CONTENT</li>
            <li onClick={() => scrollToSection(process)}>ADMISSION PROCESS</li>

              {/* <li onClick={() => scrollToSection(data.url = faq)} ><NavLink to={data.link} key={data.id}>{data.title}</NavLink></li> */}
          </ul>
        </div>
        {/* )}  */}
        <Button variant="contained" href="https://myafrilearn.com/register" className="btn-navbar">Sign up now</Button>
    </div>
  )
}

export default MainNavbar