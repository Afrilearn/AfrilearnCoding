import React, { useRef, useState } from 'react';
import Become from '../components/Become';
import CourseContent from '../components/CourseContent';
import WhatYouLearn from '../components/WhatYouLearn';
import HowAdmmision from '../components/HowAdmmision';
import SrollToTop from '../components/SrollToTop';
import FAQ from '../components/FAQ';
import ImageHolder from '../components/ImageHolder';
import LearningPath from '../components/LearningPath';
import MainNavbar from '../components/MainNavbar'
import ScrollMessage from '../components/ScrollMessage';
import VideoSection from '../components/VideoSection';
import SideBar from '../components/SideBar';
import Unicef from '../components/Unicef';
import Footer from './../components/Footer';

const Home = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const faq = useRef(null);
  const courses = useRef(null);
  const process = useRef(null);
  const lPath = useRef(null);
  
  const showMobileMenu = () => setShowSideBar(!showSideBar)

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
            lPath = {lPath} 
            showMobileMenu={showMobileMenu}
            />
            <ScrollMessage />
            
            {/* <SrollToTop /> */}
            <ImageHolder />
            <Become />
            <VideoSection />
            <div  ref={courses}>
              <CourseContent />
            </div>
            <div>
              {showSideBar && <SideBar 
            scrollToSection={scrollToSection} 
            faq={faq} 
            courses ={courses}
            process = {process}
            lPath = {lPath}
            showSideBar={showSideBar}
            showMobileMenu={showMobileMenu}
            />
            }
            
            </div>
            <WhatYouLearn /> 
            <div  ref={lPath}>           
              <LearningPath />
            </div>
            <Unicef />
            <div  ref={process}>
               <HowAdmmision />
            </div>
            <div ref={faq}>
              <FAQ />
            </div>
            <Footer />
      </>
    
  )
}

export default Home