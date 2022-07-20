import React from 'react';
import './videosection.css';
import ReactPlayer from 'react-player';

const VideoSection = () => {
  return (
    <div className='video-setionmainwrapper'>
        <div className='title-wrapper'>
            <h1>Introducing: Afrilearn KidsCode </h1>
        </div>
        <div className='message-wrapper'>
            <p>
            Afrilearn KidsCode is a live tutoring service that offers one-on-one coding lessons to kids aged
            6-18 in HTML, CSS, Javascript and Python. We also teach concepts in machine learning,
            artificial intelligence and so much more.
            </p>
        </div>

        <div className='video-wrapper'>
         <ReactPlayer
         className="player-holder"
         url='https://www.youtube.com/watch?v=EU53XF8gIyA'
          />
        </div>
    </div>
  )
}

export default VideoSection