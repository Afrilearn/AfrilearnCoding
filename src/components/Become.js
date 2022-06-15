import React from 'react';
import Button from '@mui/material/Button';
import { BsArrowRightShort } from 'react-icons/bs';
import './become.css';

const Become = () => {
  return (
    <div className='becomemainwrapper'>
        <div className='titlehead'>
            <h1 className="title-one">Your child  </h1>
            <h1 className="title-two">can be the next!</h1>
        </div>
        <div className='detail-message'>
            <h4>
            Zuckerberg. Elon Musk. Shola Akinlade. Iyin Aboyeji. You child can be next!
              </h4>
              <h4>
              Empower your child with coding skills, in 3 months, 
                </h4>
                <h4>
                to secure the future at Afrilearn KidsCode.
            </h4>
              
            <div className="btn-wrapper">
                <Button variant="contained" href="https://myafrilearn.com/register">Sign up now</Button>
            </div>

            <div className="space-wrapper">
                <span>Affordable tuition payment plans </span><span><BsArrowRightShort size={15}/></span>
            </div>
        </div>
    </div>
  )
}

export default Become