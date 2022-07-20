import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import  logo  from '../images/logo.png';
import './navbar.css';

const MainNavbar = ({ scrollToSection, faq, courses, process, lPath, showMobileMenu }) => {
//  const [showSideNav, setShowSideNav] = useState(null);

//  const showSideNavbar = () => {
//    console.log("I am clicked!")
//  }

  return (
    <div className="mainnavbar">
        <div className="logo">
        <NavLink to="/" >
          <img
          alt='logo'
              src={logo}
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
        <Button variant="contained" href="/apply" className="btn-navbar main-nav-btn">Sign up now</Button>
        <div className='hamburger-btn' onClick={showMobileMenu}>
            <GiHamburgerMenu />
        </div>
    </div>
  )
}

export default MainNavbar