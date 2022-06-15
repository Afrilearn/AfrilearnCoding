import React from 'react';
import Button from '@mui/material/Button';
import { BsArrowRightShort } from 'react-icons/bs';
import './become.css';

const Become = () => {
  return (
    <div className='becomemainwrapper'>
        <div className='titlehead'>
            <h1 className="title-one">Become a Certified </h1>
            <h1 className="title-two">Software developer</h1>
        </div>
        <div className='detail-message'>
            <h4>
                Learn high in-demand product skills from leading field experts
              </h4>
              <h4>
                that will have you job-ready in 12 months. No degree
                </h4>
                <h4>
                or prior tech experience required.
            </h4>
              
            <div className="btn-wrapper">
                <Button variant="contained" href="https://myafrilearn.com/register">Apply Now</Button>
            </div>

            <div className="space-wrapper">
                <span>Affordable tuition payment plans <span>Learn more</span></span><span><BsArrowRightShort size={15}/></span>
            </div>
        </div>
    </div>
  )
}

export default Become