import React from 'react';
import './sidebar.css';
import  logo  from '../images/logo.png';
import { NavLink } from 'react-router-dom';

const SideBar = ({scrollToSection, faq, courses, process, lPath, showSideBar, showMobileMenu}) => {
  return (
      <div className='navbar '>
          <div className="logo">
        <NavLink to="/" >
          <img
          alt='logo'
              src={logo}
            />
        </NavLink>
        </div>
        <nav className={showSideBar ? 'nav-menu active' : 'nav-menu'}>
            <ul className="nav-menu-items">
        <li className="navbar-toggle" onClick={() => {scrollToSection(lPath); showMobileMenu() }}>ABOUT KIDSCODE</li>
            <li className="navbar-toggle" onClick={() => {scrollToSection(faq); showMobileMenu()}}>FAQ</li>
            <li className="navbar-toggle" onClick={() => {scrollToSection(courses); showMobileMenu()}}>COURSE CONTENT</li>
            <li className="navbar-toggle" onClick={() => {scrollToSection(process); showMobileMenu()}}>ADMISSION PROCESS</li>
          </ul>
        </nav>
     </div>
)
}

export default SideBar