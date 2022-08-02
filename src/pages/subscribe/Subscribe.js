import React, { useState, useEffect} from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { PaystackButton } from 'react-paystack'
import { GiHamburgerMenu } from 'react-icons/gi';
import MainNavbar from '../../components/MainNavbar';
import { usePaystackPayment } from 'react-paystack';

import { getPaymentInitiate, verifyPaystackPaymentInitiate } from '../../redux/actions/paymentPlans';
import styles from '../../pages/registeration/register.module.css';
import  logo  from '../../images/logo.png';
import ShowPaymentInfo from '../../components/modal/ShowPaymentInfo';



const Subscribe = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userId, setUserId] = useState('');
    const paymentPlans = useSelector(state => state.payMe)
    const {loggedInUser} = useSelector(state => state.loginUser)
    // const loginUser_id = useSelector(state => state.loginUser?.data?.data?.user)
    const registerUser_id = useSelector(state => state.registerUser?.data?.data.user)

    const token = loggedInUser.data.token;
      console.log("loginUser_id from Payment plans =>", loggedInUser.data.user.id)
      console.log(" registerUser_id  from Payment plans =>", registerUser_id?.id)
    const [duration, setDuration ] = useState('Duration:- 3 months');
    const [course, setCourse ] = useState('KidsCode');
    const [price, setPrice] = useState(5000);
    //const publicKey = "pk_live_643a3ea8170fabb90afd7c0d94aa7bfa9d73c16d"
    
    const [email, setEmail] = useState("micheaol@gmail.com")
    // const [name, setName] = useState("Michael Oladele")
    // const [phone, setPhone] = useState("2345556666")

    const result = Object.values(paymentPlans);
    //const [modalShow, setModalShow] = React.useState(false);
    
    const testData = result.map((payment) => payment[4]);
    const courseId = testData.map((td) => td)
    const paymentId = testData.map((td) => td?.category)
    console.log("course go =>", courseId[0]?.id)
    console.log("payment go =>", paymentId[0]?.id)

    const config = {
      reference: new Date().getTime(),
      email,
      amount: price,
      publicKey: "pk_live_a9c31ffce1eca1674882580da27446be439723bf",
      channels: ["card"],
    };
    
    // you can call this function anything
    const onSuccess =  (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    const data = {
      reference: reference.reference,
      productId: paymentId,
      courseId,
      clientUserId: userId,
      amount: price,
    };
    dispatch(verifyPaystackPaymentInitiate(data, token));
     return console.log("payment ref", reference);
    };
    
    // you can call this function anything
    const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
    }


  const initializePayment = usePaystackPayment(config);

  // const checkAndMakePayment = (bankPayment = false) => {

  // }
     
    

 
 useEffect(() => {
  const setUser_Id = () => {
    if(loggedInUser.data.user.id === ""){
      setUserId(registerUser_id?.id)
    }
    setUserId(loggedInUser.data.user.id)
  }

  setUser_Id()
 }, [loggedInUser, registerUser_id])
 
 console.log("User_id ======>", userId, token)

    const handleSubmit = (e) => {
        e.preventDefault();
        setPrice('')
        setDuration('')
        setCourse('KidsCode')
 
    
  }
    useEffect(() => {
     dispatch(getPaymentInitiate())
    }, [getPaymentInitiate])
  return (
    <div className='born-again-wrapper-form'>
            <ShowPaymentInfo 
              //  show={modalShow}
              //  onHide={() => setModalShow(false)}
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
            <button onClick={() => {
                initializePayment(onSuccess, onClose)
              }}>Paystack Hooks Implementation</button>
        </div>
    </div>
  )
}

export default Subscribe