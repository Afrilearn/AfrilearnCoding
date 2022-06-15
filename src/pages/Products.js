import React from 'react'
import Become from '../components/Become'
import LearningPath from '../components/LearningPath'
import MainNavbar from '../components/MainNavbar'
import ScrollMessage from '../components/ScrollMessage'
import VideoSection from '../components/VideoSection';
import WhatYouLearn from '../components/WhatYouLearn'

const Products = () => {
  return (
    <div>
      <MainNavbar />
      <ScrollMessage />
      <Become />
      <VideoSection />
      <LearningPath />
      <WhatYouLearn />
    </div>
  )
}

export default Products