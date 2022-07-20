import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import MainNavbar from '../../components/MainNavbar';

import { registerUserInitiate } from '../../redux/actions/registerUser';
import  logo  from '../../images/logo.png';
import styles from './register.module.css';

const RegistrationForm = () => {
    const dispatch = useDispatch();

  const [fullName, setFullName ] = useState('');
  const [studentRole, setStudentRole ] = useState("Student");
  const [role, setRole ] = useState("5fd08fba50964811309722d5");
  const [course, setCourse ] = useState('KidsCode');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  
 
	// "fullName": "Michael Oladele",
	// "email": "something@gmail.com",
	// "password": "test123456",
	// "confirmPassword": "test123456",
	// "role": "606ed82e70f40e18e029165e",
	// "course": "kidsCode"
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fullName, email, password, confirmPassword, role, course)
        dispatch(registerUserInitiate(fullName, email, password, confirmPassword, role, course))
        setEmail('')
        setStudentRole("Student")
        setFullName('')
        setCourse('KidsCode')
        setPhonenumber('')
        setPassword('')
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
                value= {studentRole}
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
                <input 
                type="password"
                className='down-input color-nominee'
                placeholder='confirmPassword'
                id='confirmPassword'
                name='confirmPassword'
                value= {confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
                
                <button  className={styles.formbtncheckout} type='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default RegistrationForm