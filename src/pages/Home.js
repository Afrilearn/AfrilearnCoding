import React, { useRef } from 'react';
import Become from '../components/Become';
import CourseContent from '../components/CourseContent';
import WhatYouLearn from '../components/WhatYouLearn';
import HowAdmmision from '../components/HowAdmmision';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ImageHolder from '../components/ImageHolder';
import LearningPath from '../components/LearningPath';
import MainNavbar from '../components/MainNavbar'
import ScrollMessage from '../components/ScrollMessage';
import VideoSection from '../components/VideoSection';

const Home = () => {
  const faq = useRef(null);
  const courses = useRef(null);
  const process = useRef(null);
  const lPath = useRef(null);
  
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
      <>
            <MainNavbar 
            scrollToSection={scrollToSection} 
            faq={faq} 
            courses ={courses}
            process = {process}
            lPath = {lPath} />
            <ScrollMessage />
            <ImageHolder />
            <Become />
            <VideoSection />
            <div  ref={courses}>
              <CourseContent />
            </div>
            
            <WhatYouLearn /> 
            <div  ref={lPath}>           
              <LearningPath />
            </div>
            <div  ref={process}>
               <HowAdmmision />
            </div>
            <div ref={faq}>
              <FAQ />
            </div>
      </>
    
  )
}

export default Home