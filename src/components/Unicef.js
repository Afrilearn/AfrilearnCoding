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
                <span>UNICEF</span>
              </li>
              <li>
                <img
                    src={business}
                  />
                <span>Global Citizen</span>
              </li>
              <li>
                <img
                    src={guardian}
                  />
                <span>BusinessDay</span>
              </li>
              <li>
              <img
                  src={techcabal}
                />
                <span>TechCabal</span>
              </li>
              <li>
                <img
                    src={techcabal}
                  />
                <span>The Guardian</span>
              </li>
              <li>
                <img
                    src={venture}
                  />
                <span>VentureBurn</span>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default Unicef