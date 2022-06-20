import React from 'react';
import Button from '@mui/material/Button';
import { BsCheck } from 'react-icons/bs';
import { DiHtml53DEffects } from 'react-icons/di';
import { SiMicrosoftaccess } from 'react-icons/si';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { courseDataCss, courseDataHtml } from '../components/courseData';
import './what.css';
import { NavLink } from 'react-router-dom';


const WhatYouLearn = () => {
  return (
      <div className='over-all-wrapper'>
        {/* <div className="over-all-title">
            <h1>What will I learn?</h1>
        </div> */}
    {/* <div className='why-content-main-wrapper'>
       
      <div className='left-boxes'>
        <div className='box'></div>
        <div className='box stack-top'>
        <div className='image-wrapper'>
                <SiMicrosoftaccess size={50}/>
            </div>
        <TableContainer component={Paper}>
            <Table  aria-label="custom pagination table">
                <TableHead>
                <TableRow>
                    <TableCell>Course Outline </TableCell>
                    <TableCell>Mode of teaching </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                 {courseDataHtml.map((row) => (
                <TableRow
                key={row.id}
                sx={{  border: 1  }}
                >
                <TableCell component="th" scope="row">
                    {row.content}
                </TableCell>
                <TableCell>{row.mode}</TableCell>
                
                </TableRow>
                  ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
      </div>
      <div className='right-boxes'>
        <div className='box-two'></div>
        <div className='box-two stack-top-second'>
            <div className='image-wrapper'>
                <DiHtml53DEffects size={60}/>
            </div>
          
            <TableContainer component={Paper}>
            <Table  aria-label="custom pagination table">
                <TableHead>
                <TableRow>
                    <TableCell>Course Outline </TableCell>
                    <TableCell>Mode of teaching </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                 {courseDataCss.map((row) => (
                <TableRow
                key={row.id}
                sx={{  border: 1  }}
                >
                <TableCell component="th" scope="row">
                    {row.content}
                </TableCell>
                <TableCell>{row.mode}</TableCell>
                
                </TableRow>
                  ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
      </div> */}

    {/* </div> */}
        <div className='last-message'>
            <h1>Not sure what to do next?</h1>
            <h3>We are here to help you. <a href="https://myafrilearn.com/contact">Speak with a learning advisor</a></h3>
        </div>
    </div>
  )
}

export default WhatYouLearn