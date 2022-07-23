import React, { useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import { GiHamburgerMenu } from 'react-icons/gi';
import MainNavbar from '../../components/MainNavbar';

import { loginUserInitiate } from '../../redux/actions/loginUser';
import  logo  from '../../images/logo.png';
import styles from '../registeration/register.module.css';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
        dispatch(loginUserInitiate(email, password))
        setEmail('')
        setPassword('')
        navigate('/subscribe')
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
                <h1>sign-in KidsCode</h1>
            </div>
            <form className={styles.formtofill} onSubmit={handleSubmit}>
                
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

export default LoginForm