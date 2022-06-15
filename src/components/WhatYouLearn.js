import React from 'react';
import { BsCheck } from 'react-icons/bs';
import Button from '@mui/material/Button';
import './what.css';


const WhatYouLearn = () => {
  return (
    <div className='what-main-wrapper'>
         <div className='what-main-title'>
            <h1>What will I learn?</h1>
         </div>
         <div className='table-wrapper'>
            <div className='inner-title'>
                <h1>Course Objectives</h1>
            </div>
            <div className='inner-detail-sub-head'>
                <p>This program is designed to provide you with in-depth knowledge on these:</p>
            </div>
            <div className='table-inner-detail'>
                <div className='left-divider'>
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
                </div>
                <div className='right-divider'>
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
                    <Button variant="contained" className='btn-styled' href="https://myafrilearn.com/register">Apply Now</Button>
                </div>
            </div>   

         </div>
    </div>
  )
}

export default WhatYouLearn