import React from 'react';
import { AiOutlineForm } from "react-icons/ai";
import { FaDraftingCompass } from "react-icons/fa";
import { SiPaloaltosoftware } from "react-icons/si";
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
                        Fill and submit the application form
                    </li>
                </div>
                <div className='steps-wrapper'>
                    <span className='number-wrapper'>02</span>
                    <span className='icon-wrapper'><FaDraftingCompass size={50} color="#00D9B6" /></span>
                    <li>
                        STEP TWO <br/>
                        Take and pass all assessment tests
                    </li>
                </div>
                <div className='steps-wrapper'>
                    <span className='number-wrapper'>03</span>
                    <span className='icon-wrapper'><SiPaloaltosoftware size={50} color="#00D9B6" /></span>
                    <li>
                        STEP THREE <br/>
                        Complete enrolment and begin your journey into Software Engineering
                    </li>
                </div>
                <div className='steps-wrapper'>
                    <span className='number-wrapper'>04</span>
                    <span className='icon-wrapper'><TbCertificate size={50} color="#00D9B6" /></span>
                    <li>
                        STEP FOUR <br/>
                        Get certification of participation
                    </li>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default HowAdmmision