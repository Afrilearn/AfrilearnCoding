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
           
              <div className="write-up-wrapper">
                <h4>
                Transform your child's life with</h4> <h4 className="coding-wrapper"> Coding Skills</h4> <h4>in</h4><h4 className="coding-wrapper">3 months</h4>
                  
              </div>
              
            <div className="btn-wrapper">
                <Button variant="contained" href="https://myafrilearn.com/register" className="btn-navbar">Sign up now</Button>
            </div>

        </div>
    </div>
  )
}

export default Become