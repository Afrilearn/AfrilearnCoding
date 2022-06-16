import React, { useRef } from 'react';
import Become from '../components/Become';
import CourseContent from '../components/CourseContent';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import ImageHolder from '../components/ImageHolder';
import LearningPath from '../components/LearningPath';
import MainNavbar from '../components/MainNavbar'
import ScrollMessage from '../components/ScrollMessage';
import VideoSection from '../components/VideoSection';

const Home = () => {
  const faq = useRef(null);
  
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
      <>
            <MainNavbar  scrollToSection={scrollToSection} faq={faq} />
            <ScrollMessage />
            <ImageHolder />
            <Become />
            <VideoSection />
            <CourseContent />
            <div ref={faq}>
              <FAQ />
            </div>
      </>
    
  )
}

export default Home