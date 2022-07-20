import React from 'react';
import { AiOutlineForm } from "react-icons/ai";
import { FaHourglassStart } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import './howAdmission.css';

const HowAdmmision = () => {
  return (
    <div className='how-admision-main-wrapper'>
        <div className='main-title-wrapper'>
            <h1>How the Admission Process Works</h1>
        </div>
        <div className='order-list-wrapper'>
            <ul>
                <div className='steps-wrapper'>
                    <span className='number-wrapper'>01</span>
                    <span className='icon-wrapper'><AiOutlineForm size={50} color="#00D9B6" /></span>
                    <li>
                        STEP ONE <br/>
                        Submit application form and pass assessment test
                    </li>
                </div>
                <div className='steps-wrapper'>
                    <span className='number-wrapper'>02</span>
                    <span className='icon-wrapper'><FaHourglassStart size={50} color="#00D9B6" /></span>
                    <li>
                        STEP TWO <br/>
                        Start and complete the Afrilearn KidsCode classes
                    </li>
                </div>
                <div className='steps-wrapper'>
                    <span className='number-wrapper'>03</span>
                    <span className='icon-wrapper'><TbCertificate size={50} color="#00D9B6" /></span>
                    <li>
                        STEP THREE <br/>
                        Get certification and start building projects
                    </li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default HowAdmmision