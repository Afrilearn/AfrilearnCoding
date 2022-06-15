import React from 'react';
import Button from '@mui/material/Button';
import MainNavbar from '../components/MainNavbar'
import ScrollMessage from '../components/ScrollMessage'

const Apply = () => {
  return (
    <>
        <MainNavbar />
        <ScrollMessage />
        <div className='apply-main-wrapper'>
            <h1>Start your application</h1>
        
        <div className='message-wrapper'>
            <p>
            Thank you for your interest in applying to AfriLearn. To continue your
            application process, please note that you will be charged $-
            (Also check our tuition page to select an affordable payment plan)
            </p>
        </div>
        <div className='enter-message-wrapper'>
            <h3>
                Please fill in your email address
            </h3>
        </div>

        <form>
            <input type='email' placeholder='Enter email'/>
            <Button variant="contained" disableElevation>
               Continue
            </Button>
        </form>
    </div>
    </>
  )
}

export default Apply