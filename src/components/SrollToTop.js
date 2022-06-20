import React, { useState, useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

const SrollToTop = () => {
    const [scrollToTheTop, setScrollToTheTop] = useState(false)

    useEffect(() => {
        if(window.screenY >300) {
            setScrollToTheTop(true)
        }else{
            setScrollToTheTop(false)
        }
    }, [])
    
    const scrollToUp = (elementRef) => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }


  return (
    <div>
       { scrollToTheTop && <FaAngleDoubleUp onClick={scrollToUp} /> }
    </div>
  )
}

export default SrollToTop