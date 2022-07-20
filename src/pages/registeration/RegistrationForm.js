import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import  logo  from '../../images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import MainNavbar from '../../components/MainNavbar';

import styles from './register.module.css';

const RegistrationForm = () => {
    // const dispatch = useDispatch();

  const [fullName, setFullName ] = useState('');
  const [role, setRole ] = useState("Student");
  const [course, setCourse ] = useState('KidsCode');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [nominee, setNominee] = useState('');
  const [selected, setSelected] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(role, course, fullName, email, phonenumber, password)
        // dispatch(resgisterNominationInitiate(name, phonenumber, email, selected, nominee))
        setEmail('')
        setNominee('')
        setRole('')
        setFullName('')
        setCourse('')
        setPhonenumber('')
        setPassword('')
        setSelected('')
        }

  return (
      <div className='born-again-wrapper-form'>
        <div className={styles.mainnavbar}>
        <div className="logo">
        <NavLink to="/" >
          <img
          alt='logo'
              src={logo}
            />
        </NavLink>
        </div>
        <div className="wrapper-ul">
          {/* <ul>
            <li onClick={() => scrollToSection(lPath)}>ABOUT KIDSCODE</li>
            <li onClick={() => scrollToSection(faq)}>FAQ</li>
            <li onClick={() => scrollToSection(courses)}>COURSE CONTENT</li>
            <li onClick={() => scrollToSection(process)}>ADMISSION PROCESS</li>
          </ul> */}
        </div>
        {/* <Button variant="contained" href="/apply" className="btn-navbar main-nav-btn">Sign up now</Button> */}
        {/* <div className='hamburger-btn' onClick={showMobileMenu}>
            <GiHamburgerMenu />
        </div> */}
    </div>
        <div className="inner-wrapper">
            <div className={styles.headerbornagain}>
                <h1>Join KidsCode</h1>
            </div>
            <form className={styles.formtofill} onSubmit={handleSubmit}>
                <input 
                type="text"
                className='top-input'
                placeholder='role'
                id='role'
                name='role'
                default = "Student"
                value= {role}
                onChange={(e) => setRole(e.target.value)}
                required
                />
                <input 
                type="text"
                className='course'
                placeholder='course'
                id='course'
                name='fname'
                value= {course}
                onChange={(e) => setCourse(e.target.value)}
                required
                />
                <input 
                type="text"
                className='top-input'
                placeholder='Full Name'
                id='fname'
                name='fname'
                value= {fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                />
                <input 
                type="text"
                className='down-input'
                placeholder='Email'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <input type="text"
                className='down-input'
                placeholder='Phone Number'
                id='phone'
                name='phone'
                value= {phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                required
                />
                 <input 
                type="password"
                className='down-input color-nominee'
                placeholder='password'
                id='password'
                name='password'
                value= {password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                
                <button  className={styles.formbtncheckout} type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default RegistrationForm