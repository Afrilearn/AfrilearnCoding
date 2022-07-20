import React from 'react';
import Slider from "react-slick";
import './imageholder.css'
import Zuckerberg from '../images/Zuckerberg.png';
import ElonMusk from '../images/Elon-Musk.png';
import SholaAkinlade from '../images/Shola-Akinlade.png'
import IyinAboyeji from '../images/Iyin-Aboyeji.png';
import JudithOkonkwo from '../images/JudithOkonkwo.png';
import BosunTijani from '../images/BosunTijani.png';
import OdunEweniyi from '../images/OdunEweniyi.png';
import Yanmo from '../images/YamnoOmorogbe.png';
import TopeAwotona from '../images/TopeAwotona.png';


// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)  

const ImageHolder = () => {

   const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

   // const myRef = useRef(null)
   // const executeScroll = () => scrollToRef(myRef)

  return (
     <div className='main-image-wrapper'>

   <Slider {...settings}  >
        <div  className='image-holder first-image-holder'>
           <img
         
                src={Zuckerberg}
                alt="Zuckerberg"
           />
                <h1>Mark - Facebook</h1>
        </div>
        <div className='image-holder second-image-holder'>
        <img
            src={ElonMusk}
            alt="ElonMusk"
           />
           <h1>Elon - Tesla</h1>
        </div>
        <div className='image-holder third-image-holder'>
        <img
                src={SholaAkinlade}
                alt="SholaAkinlade"
           />
            <h1>Shola - Paystack</h1>
        </div>
        <div className='image-holder fourth-image-holder'>
        <img
            src={IyinAboyeji}
            alt="IyinAboyeji"
           />
           <h1>Iyin - Andela</h1>
        </div>
        <div className='image-holder fourth-image-holder'>
        <img
            src={JudithOkonkwo}
            alt="IyinAboyeji"
           />
           <h1>Judith - AR/VR Africa</h1>
        </div>
        <div className='image-holder fourth-image-holder'>
        <img
            src={BosunTijani}
            alt="IyinAboyeji"
           />
           <h1>Bosun - CCHub</h1>
        </div>
        <div className='image-holder fourth-image-holder'>
        <img
            src={Yanmo}
            alt="Yanmo"
           />
           <h1>Yanmo - Bamboo</h1>
        </div>
        <div className='image-holder fourth-image-holder'>
        <img
            src={TopeAwotona}
            alt="IyinAboyeji"
           />
           <h1>Tope - Calendly</h1>
        </div>
        <div className='image-holder fourth-image-holder'>
        <img
            src={OdunEweniyi}
            alt="IyinAboyeji"
           />
           <h1>Odun - Piggyvest</h1>
        </div>
        </Slider>
        </div>
  )
}

export default ImageHolder