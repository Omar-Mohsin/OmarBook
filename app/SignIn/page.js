'use client'
import React, { useState } from 'react';
import './SignPage.css';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {signInWithGooglePopup}  from '@/firebase'
import {createUserDocumentFromAuth} from '@/firebase'
import { SelectUser, logout, setUser } from '@/redux/auth/authSlice';

export default function SignInPage() {
  const dispatch = useDispatch();


  const signInWithGoogleHandler = async () => {

    console.log('in google sign handler')
  
    try{
      const {user} = signInWithGooglePopup();
      console.log(user);

    }
    catch(error){
      console.log(error);
    }
  };

  return (
    
    <div className="container">
      <div className="innerContainer">
        <section className="brand">
          <h3>OmarBook</h3>
          <h5>OmarBook helps you connect and share with the people in your life.</h5>
        </section>
        <section>
          <form className="form">
            <input
              type="text"
              placeholder="Email address or phone number"
              className="formElement"
            
            />
            <input
              type="password"
              placeholder="Password"
              className="formElement"
            />
            <button className="loginButton">
              Log in
            </button>
            <Link href={''} className="ForgetPasswordLink">
              Forgotten password?
            </Link>
            <hr />
            <button className="createAccountButton" onClick={signInWithGoogleHandler}>
              Sign in with Google
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

