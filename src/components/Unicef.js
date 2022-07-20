import React from 'react';
import './unicef.css';
import './imageholder.css'
import Slider from "react-slick";

import unicef from '../images/unicef-logo.png';
import Technext from '../images/technext.png';
import TheNation from '../images/thenation.jpg';
import guardian from '../images/guadian.png';
import techcabal from '../images/TC.png';
import venture from '../images/ventureburn-logo.png';
import USChambers from '../images/us-chamber-logo.png';
import gc from '../images/gc-logo-no-space.png';
import BusinessDay from '../images/business.jpg';
import techbuild from '../images/techbuild.png';

const Unicef = () => {


  return (
    <>
      <div className="title-holder-wrapper">
           <h1>Endorsed by:</h1>
      </div>
 
    <div className='main-image-wrapper-endorsed'>
         <div  className='first-image-holder-endorsed'>
         <img
                 src={unicef}
                 alt="unicef"
            />
         </div>

         <div className='fourth-image-holder-endorsed'>
         <img
             src={techcabal}
             alt="techcabal"
            />
         </div>
     
         <div className='fourth-image-holder-endorsed'>
         <img
             src={USChambers}
             alt="USChambers"
            />
         </div>
         <div className=' fourth-image-holder-endorsed'>
         <img
             src={gc}
             alt="gc"
            />
         </div>
         <div className='fourth-image-holder-endorsed'>
         <img
             src={BusinessDay}
             alt="BusinessDay"
            />
         </div>
         <div className='fourth-image-holder-endorsed'>
         <img
             src={techbuild}
             alt="techbuild"
            />
         </div>
         </div>
         </>
  )
}

export default Unicef