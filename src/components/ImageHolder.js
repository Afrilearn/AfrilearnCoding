import React from 'react';
import './imageholder.css'
import Zuckerberg from '../images/Zuckerberg.jpg';
import ElonMusk from '../images/Elon-Musk.jpg';
import SholaAkinlade from '../images/Shola-Akinlade.png'
import IyinAboyeji from '../images/Iyin-Aboyeji.jpg'

const ImageHolder = () => {
  return (
    <div className='main-image-wrapper'>
        <div className='first-image-holder'>
           <img
                src={Zuckerberg}
           />
        </div>
        <div className='second-image-holder'>
        <img
            src={ElonMusk}
           />
        </div>
        <div className='third-image-holder'>
        <img
                src={SholaAkinlade}
           />
        </div>
        <div className='fourth-image-holder'>
        <img
            src={IyinAboyeji}
           />
        </div>
    </div>
  )
}

export default ImageHolder