import React from 'react';
import './unicef.css';

import unicef from '../images/unicef-logo.png';
import global from '../images/global-logo.png';
import business from '../images/business.jpg';
import guardian from '../images/guardian-logo.png';
import techcabal from '../images/tech-cabal-logo.png';
import venture from '../images/ventureburn-logo.png';
// import techcabal from '../images/tech-cabal-logo.png';

const Unicef = () => {
  return (
    <div className='endorsed-main-wrapper'>
        <div className='main-title'>
            <h1>As Endorsed by</h1>
        </div>
        <div className='main-endorsed-wrapper'>
            <ul>
              <li>
                <img
                  src={unicef}
                />
                UNICEF
              </li>
              <li>
                <img
                    src={business}
                  />
                Global Citizen
              </li>
              <li>
                <img
                    src={guardian}
                  />
                BusinessDay
              </li>
              <li>
              <img
                  src={techcabal}
                />
                TechCabal
              </li>
              <li>
                <img
                    src={techcabal}
                  />
                The Guardian
              </li>
              <li>
                <img
                    src={venture}
                  />
                VentureBurn
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Unicef