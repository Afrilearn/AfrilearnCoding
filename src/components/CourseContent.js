import React from 'react';
import Button from '@mui/material/Button';
import { BsCheck } from 'react-icons/bs';

import { TbBrandCss3, TbBrandHtml5, TbBrandJavascript } from 'react-icons/tb';
import { courseDataCss, courseDataHtml, courseDataJs } from '../components/courseData';
import './course.css';

const CourseContent = () => {
  return (
    <div className='course-content-main-wrapper'>
      <div className='left-boxes'>
        {/* <div className='box'></div> */}
        <div className='box stack-top'>
        <div className='image-wrapper'>
                <TbBrandCss3 size={60}/>
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
                <Button variant="contained" href="https://myafrilearn.com/register" className="btn-navbar">Sign up now</Button>
            </div>
        </div>
      </div>
      <div className='right-boxes'>
        {/* <div className='box-two'></div> */}
        <div className='box-two stack-top-second'>
            <div className='image-wrapper'>
                <TbBrandHtml5 size={60}/>
            </div>
            <div className='content-wrapper-title'>
                <h1>Course Outline</h1>
            </div>
                 <ul>
                 {courseDataCss && courseDataCss.map((cssData) => 
                    <li><span><BsCheck /></span>{cssData.content}</li>
                 
                    )}
                 </ul>
                    <div className="btn-wrapper-content btn-wrapper-content-three">
                <Button variant="contained" href="https://myafrilearn.com/register" className="btn-navbar btn-middle">Sign up now</Button>
            </div>
        </div>
      </div>
      <div className='middle-boxes'>
        {/* <div className='box-three'></div> */}
        <div className='box-three stack-top-second'>
            <div className='image-wrapper'>
                <TbBrandJavascript size={60}/>
            </div>
            <div className='content-wrapper-title'>
                <h1>Course Outline</h1>
            </div>
                 <ul>
                 {courseDataJs && courseDataJs.map((jsData) => 
                    <li><span><BsCheck/></span>{jsData.content}</li>
                    )}
                 </ul>
                    <div className="btn-wrapper-content">
                <Button variant="contained" href="https://myafrilearn.com/register" className="btn-navbar">Sign up now</Button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default CourseContent