import React,{ useState } from "react";
import Input from './Input';
import Buttons from './Buttons'
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom'
import './App.css'
import './Login.css'
import { createUserDocFromAuth, signInWithGooglePopup } from "./utils/firebase";

const Login = (props)=>{
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user)
    }

    const [contact, setContact] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event)=>{
        const {name, value} = event.target  
        setContact ((preValue)=>{
            return {
            ...preValue,
            [name]: value
            }
        })
    }

    return <div className='header-div'>

        <Header />

        <Input
        name= 'email'
        type= 'email'
        placeholder= 'email'
        onChange= {handleChange}
        value = {contact.email}
        />

        <br></br>

        <Input
        name = 'password'
        type = 'password'
        placeholder = 'password'
        onChange = {handleChange}
        value = {contact.password}
        />

        <br></br>

        <Buttons
            type = 'submit'
            text = 'Login'
        />

        <br></br>

        <button onClick={logGoogleUser}>
            log in with Google
        </button>

        <br></br>
        <br></br>

        <Link to='/signup'>
            Sign up instead
        </Link>

        <Footer />

    </div>
}

export default Login;