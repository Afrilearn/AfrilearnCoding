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
        


        <div className='last-message'>
            <h1>Got any questions? </h1>
            <h3>Simply send us an email at hello@myafrilearn.com. <br/>Hotlines: Nigeria +234 805 154 4949, UK +44 7950 969091, Canada +1 236 999 4838</h3>
        </div>
    </div>
  )
}

export default WhatYouLearn