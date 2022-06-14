import React from 'react';
import './videosection.css';
import ReactPlayer from 'react-player';

const VideoSection = () => {
  return (
    <div className='video-setionmainwrapper'>
        <div className='title-wrapper'>
            <h1>Want to start a great career in Product?</h1>
        </div>
        <div className='message-wrapper'>
            <p>
            This video gives you a sneak peek into the three core fields of Product. Learn from leading experts on the fundamentals of what each role entails, and how to navigate each career path.
            </p>
        </div>

        <div className='video-wrapper'>
         <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
        </div>
    </div>
  )
}

export default VideoSection