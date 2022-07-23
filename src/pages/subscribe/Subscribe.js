import React, { useState, useEffect} from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { PaystackButton } from 'react-paystack'
import { GiHamburgerMenu } from 'react-icons/gi';
import MainNavbar from '../../components/MainNavbar';

import { getPaymentInitiate, makePaymentInitiate } from '../../redux/actions/paymentPlans';
import styles from '../../pages/registeration/register.module.css';
import  logo  from '../../images/logo.png';
import ShowPaymentInfo from '../../components/modal/ShowPaymentInfo';

const Subscribe = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
const paymentPlans = useSelector(state => state.payMe)
const loginUser_id = useSelector(state => state.loginUser?.data?.data?.user)
const registerUser_id = useSelector(state => state.registerUser?.data?.data.user)

    console.log("loginUser_id from Payment plans =>", loginUser_id?.id)
    console.log(" registerUser_id  from Payment plans =>", registerUser_id?.id)
  const [duration, setDuration ] = useState('Duration:- 3 months');
  const [course, setCourse ] = useState('KidsCode');
  const [price, setPrice] = useState(10000000);
  const publicKey = "pk_live_b832dc6c78087f0868d38381945928d5cbc57265"
  // const amount = 1000000 // Remember, set in kobo!
  const [email, setEmail] = useState("micheaol@gmail.com")
  const [name, setName] = useState("Michael Oladele")
  const [phone, setPhone] = useState("2345556666")

  const result = Object.values(paymentPlans);
  const [modalShow, setModalShow] = React.useState(false);
  
  const testData = result.map((payment) => payment[4]);
  const courseId = testData.map((td) => td)
  const paymentId = testData.map((td) => td.category)
  console.log("course go =>", courseId[0]?.id)
  console.log("payment go =>", paymentId[0]?.id)


  const componentProps = {
    email,
    amount: price,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  }

 useEffect(() => {
  const setUser_Id = () => {
    if(loginUser_id?.id === ""){
      setUserId(registerUser_id?.id)
    }
    setUserId(loginUser_id?.id)
  }

  setUser_Id()
 }, [loginUser_id, registerUser_id])
 
 console.log("User_id ======>", userId)

 
	// "fullName": "Michael Oladele",
	// "email": "something@gmail.com",
	// "password": "test123456",
	// "confirmPassword": "test123456",
	// "role": "606ed82e70f40e18e029165e", 
	// "course": "kidsCode" 5fd08fba50964811309722d5
    const handleSubmit = (e) => {
        e.preventDefault();
        // dispatch(makePaymentInitiate(courseId[0], paymentId[0], userId))
        setPrice('')
        setDuration('')
        setCourse('KidsCode')
      //  setModalShow(true)
      

        // if (user = "success") {
        //     navigate('/subscribe')
        // }
        }

    // useEffect(() => {
    //   setUser_Id()
    // }, [setUser_Id])
    
    useEffect(() => {
     dispatch(getPaymentInitiate())
    }, [getPaymentInitiate])
    
  return (
    <div className='born-again-wrapper-form'>
            <ShowPaymentInfo 
               show={modalShow}
               onHide={() => setModalShow(false)}
            />
        <div className={styles.mainnavbar}>
        <div className="logo">
        <NavLink to="/" >
          <img
          alt='logo'
              src={logo}
            />
        </NavLink>
        </div>
    </div>
        <div className="inner-wrapper">
            <div className={styles.headerbornagain}>
                <h1>Subscribe to KidsCode</h1>
            </div>
            <form className={styles.formtofill} onSubmit={handleSubmit}>
                <input 
                type="text"
                className='top-input'
                placeholder='role'
                id='role'
                name='role'
                default = "Student"
                value= {price}
                onChange={(e) => setPrice(e.target.value)}
                required
                />
                <input 
                type="text"
                className='course'
                placeholder='course'
                id='course'
                name='fname'
                value= {course}
                onChange={(e) => setCourse(e.target.value)}
                required
                />
                <input 
                type="text"
                className='top-input'
                placeholder='Full Name'
                id='fname'
                name='fname'
                value= {duration}
                onChange={(e) => setDuration(e.target.value)}
                required
                />
                
                {/* <button  className={styles.formbtncheckout} type='submit'>Submit</button> */}
            </form>
            <PaystackButton {...componentProps} />
        </div>
    </div>
  )
}

export default Subscribe