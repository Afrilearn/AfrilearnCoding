import React from 'react';
import Button from '@mui/material/Button';
import { BsCheck } from 'react-icons/bs';
import { DiHtml53DEffects } from 'react-icons/di';
import { SiMicrosoftaccess } from 'react-icons/si';
import { courseDataCss, courseDataHtml } from '../components/courseData';
import './course.css';

const CourseContent = () => {
  return (
    <div className='course-content-main-wrapper'>
      <div className='left-boxes'>
        <div className='box'></div>
        <div className='box stack-top'>
        <div className='image-wrapper'>
                <SiMicrosoftaccess size={60}/>
            </div>
            <div className='content-wrapper-title'>
                <h1>Course Outline</h1>
            </div>
                <ul>
                    {courseDataCss && courseDataCss.map((cssData) => 
                    <li><span><BsCheck /></span>{cssData.content}</li>
                    )}
                </ul>
                    <div className="btn-wrapper-content">
                <Button variant="contained" href="https://myafrilearn.com/register" className="btn-content">Read more</Button>
            </div>
        </div>
      </div>
      <div className='right-boxes'>
        <div className='box-two'></div>
        <div className='box-two stack-top-second'>
            <div className='image-wrapper'>
                <DiHtml53DEffects size={60}/>
            </div>
            <div className='content-wrapper-title'>
                <h1>Course Outline</h1>
            </div>
                 <ul>
                 {courseDataHtml && courseDataHtml.map((htmlData) => 
                    <li><span><BsCheck /></span>{htmlData.content}</li>
                    )}
                 </ul>
                    <div className="btn-wrapper-content">
                <Button variant="contained" href="https://myafrilearn.com/register" className="btn-content">Read more</Button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default CourseContent