import React, { useState } from "react";
import Input from './Input';
import Buttons from './Buttons'
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom'
import './App.css'
import './Signup.css'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "./utils/firebase";

const Signup = (props) => {
    const [contact, setContact] = useState({
        displayName: '',
        email: '',
        password: '',
        comfirmPassword: ''
    })

    const {displayName, email, password, comfirmPassword} = contact;
    console.log(contact);

    const handleChange = (event) => {
        const { name, value } = event.target
        setContact((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleSubmit = async(event) =>
    {
        event.preventDefault();

        if (password !== comfirmPassword){
            alert('Password do not match!')
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth(user)
        }
        catch(error){
            console.log('error in creating user', error.message)
        }
    }

    return <div className='header-div'>

        <Header />

        <Input
            name='name'
            type='text'
            placeholder='name'
            onChange={handleChange}
            value={contact.name}
        />
        
        <Input
            name='email'
            type='email'
            placeholder='email'
            onChange={handleChange}
            value={contact.email}
        />

        <br></br>

        <Input
            name='password'
            type='password'
            placeholder='password'
            onChange={handleChange}
            value={contact.password}
        />

        <Input
            name='comfirmPassword'
            type='password'
            placeholder='comfirmPassword'
            onChange={handleChange}
            value={contact.password}
        />

        <br></br>

        <button onClick={handleSubmit}>
            Sign Up
        </button>

        <br></br>
        <br></br>

        <Link to='/login'>
            Login
        </Link>

        <Footer />

    </div>
}

export default Signup;