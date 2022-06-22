import React, { useRef } from 'react';
import './imageholder.css'
import Zuckerberg from '../images/Zuckerberg.png';
import ElonMusk from '../images/Elon-Musk.png';
import SholaAkinlade from '../images/Shola-Akinlade.png'
import IyinAboyeji from '../images/Iyin-Aboyeji.png'


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

const ImageHolder = () => {

   const myRef = useRef(null)
   const executeScroll = () => scrollToRef(myRef)

  return (
    <div className='main-image-wrapper'  >
        <div ref={myRef} className='image-holder first-image-holder'>
           <img
                src={Zuckerberg}
                alt="Zuckerberg"
           />
           <h1>Zuckerberg</h1>
        </div>
        <div className='image-holder second-image-holder'>
        <img
            src={ElonMusk}
            alt="ElonMusk"
           />
           <h1>ElonMusk</h1>
        </div>
        <div className='image-holder third-image-holder'>
        <img
                src={SholaAkinlade}
                alt="SholaAkinlade"
           />
            <h1>SholaAkinlade</h1>
        </div>
        <div className='image-holder fourth-image-holder'>
        <img
            src={IyinAboyeji}
            alt="IyinAboyeji"
           />
           <h1>IyinAboyeji</h1>
        </div>
    </div>
  )
}

export default ImageHolder