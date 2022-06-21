import React, { useState, useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

import './scroll.css';

const SrollToTop = () => {
    const [showScrollToTheTop, setShowScrollToTheTop] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
          if(window.screenY > 300) {
            setShowScrollToTheTop(true)
          }else{
            setShowScrollToTheTop(false)
          }
        })
    }, [])
    
    const scrollToUp = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }


  return (
  
      <FaAngleDoubleUp
      onClick={scrollToUp} 
      className="top-btn-possition to-top-btn" 
      />
       

  )
}

export default SrollToTop