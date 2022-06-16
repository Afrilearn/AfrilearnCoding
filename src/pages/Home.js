import React from 'react'
import Become from '../components/Become';
import CourseContent from '../components/CourseContent';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import LearningPath from '../components/LearningPath';
import MainNavbar from '../components/MainNavbar'
import ScrollMessage from '../components/ScrollMessage';
import VideoSection from '../components/VideoSection';

const Home = () => {
  return (
      <>
            <MainNavbar />
            <ScrollMessage />
            <Become />
            {/* <LearningPath /> */}
            <VideoSection />
            <CourseContent />
            <FAQ />
            {/* <Footer /> */}
      </>
    
  )
}

export default Home