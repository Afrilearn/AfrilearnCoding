import React from 'react'
import Become from '../components/Become'
import LearningPath from '../components/LearningPath'
import MainNavbar from '../components/MainNavbar'
import ScrollMessage from '../components/ScrollMessage'
import VideoSection from '../components/VideoSection';

const Products = () => {
  return (
    <div>
      <MainNavbar />
      <ScrollMessage />
      <Become />
      <VideoSection />
      <LearningPath />
    </div>
  )
}

export default Products