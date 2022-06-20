import React from 'react';
import Button from '@mui/material/Button';
import { BsArrowRightShort } from 'react-icons/bs';
import './become.css';

const Become = () => {
  return (
    <div className='becomemainwrapper'>
        <div className='titlehead'>
            <h1 className="title-one">Empower your child to </h1>
            <h1 className="title-two"> be the next!</h1>
        </div>
        <div className='detail-message'>
           
              <h4>
              Transform your child's life with coding skills, in 3 months, 
                </h4>
                <h4>
                at Afrilearn KidsCode.
            </h4>
              
            <div className="btn-wrapper">
                <Button variant="contained" href="https://myafrilearn.com/register" className="btn-navbar">Sign up now</Button>
            </div>

        </div>
    </div>
  )
}

export default Become