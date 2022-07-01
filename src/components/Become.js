import React from 'react';
import Button from '@mui/material/Button';
import './become.css';

const Become = () => {
  return (
    <div className='becomemainwrapper'>
        <div className='titlehead'>
            <h1 className="title-one">Your child can </h1>
            <h1 className='scrolling-words-box typewriter-text'>
              be the next! 
            </h1>
        </div>
        <div className='detail-message'>
           
              <h4>
              Transform your child's life with <b className='bolder'>Coding Skills, in 3 months</b> 
                </h4>
              
            <div className="btn-wrapper">
                <Button variant="contained" href="https://myafrilearn.com/register" className="btn-navbar">Sign up now</Button>
            </div>

        </div>
    </div>
  )
}

export default Become