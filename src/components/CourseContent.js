import React from 'react';
import Button from '@mui/material/Button';
import { BsCheck } from 'react-icons/bs';
import { DiHtml53DEffects } from 'react-icons/di';
import { SiMicrosoftaccess } from 'react-icons/si';
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
                        <li><span><BsCheck /></span>Introduction to CSS</li>
                        <li><span><BsCheck /></span>CSS Syntax and comment</li>
                        <li><span><BsCheck /></span>CSS Selectors </li>
                        <li><span><BsCheck /></span>CSS  Navbar</li>
                        <li><span><BsCheck /></span>CSS colours</li>
                        <li><span><BsCheck /></span>CSS Backgrounds</li>
                        <li><span><BsCheck /></span>Border Styling in CSS</li>
                        <li><span><BsCheck /></span>Adding padding and margin spaces using CSS</li>
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
                        <li><span><BsCheck /></span>Computer Software and Hardware.</li>
                        <li><span><BsCheck /></span>Introduction to HTML</li>
                        <li><span><BsCheck /></span>HTML Headings and Paragraphs. </li>
                        <li><span><BsCheck /></span>HTML Comments, Color, Styling and HTML attributes </li>
                        <li><span><BsCheck /></span>HTML Links, HTML Link syntax, HTML Link Attributes.</li>
                        <li><span><BsCheck /></span>HTML Images, Background Images, Images Map</li>
                        <li><span><BsCheck /></span>HTML Identity and Classes</li>
                        <li><span><BsCheck /></span>HTML List and Tables</li>
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