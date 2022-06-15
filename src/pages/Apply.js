import React from 'react';
import Button from '@mui/material/Button';
import MainNavbar from '../components/MainNavbar'
import ScrollMessage from '../components/ScrollMessage'

const Apply = () => {
  return (
    <>
        <MainNavbar />
        {/* <ScrollMessage /> */}
        <div className='apply-main-wrapper'>
            <h1>Start your application</h1>
        
        <div className='message-wrapper'>
            <p>
            Thank you for your interest in applying to AfriLearn. To continue your
            application process, please note that you will be charged $-
            (Also check our tuition page to select an affordable payment plan)
            </p>
            <p>
            Afrilearn integrates a network of seasoned tutors, animators, and developers to deliver world-class and affordable education to young Africans anywhere.

            As the skill of the future, we are invested in developing tech-based courses that prepare the African child for the future of work, helping them compete favourably with their counterparts around the world.

            </p>
        </div>
        <div className='enter-message-wrapper'>
            <h3>
                Please click to continue
            </h3>
        </div>

        <form>
            <Button variant="contained" disableElevation href="https://myafrilearn.com/register" className="btn-navbar">
               Continue
            </Button>
        </form>
    </div>
    </>
  )
}

export default Apply