import React from 'react'
import Become from '../components/Become';
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
      </>
    
  )
}

export default Home