import React from 'react';
import Button from '@mui/material/Button';
import { BsArrowRightShort } from 'react-icons/bs';
import './become.css';

const Become = () => {
  return (
    <div className='becomemainwrapper'>
        <div className='titlehead'>
            <span className="title-one">Empower your child to </span>
            <h1 className='scrolling-words-box'>
              be the next!
            </h1>
        </div>
        <div className='detail-message'>
           
              <h4>
              Transform your child's life with Coding Skills, in 3 months 
                </h4>
              
            <div className="btn-wrapper">
                <Button variant="contained" href="https://myafrilearn.com/register" className="btn-navbar">Sign up now</Button>
            </div>

        </div>
    </div>
  )
}

export default Become