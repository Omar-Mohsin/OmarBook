'use client'
import React, { useState } from 'react';
import './SignPage.css';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { signInWithGooglePopup } from '@/firebase'
import { createUserDocumentFromAuth } from '@/firebase'
import { SelectUser, setUser, removeUser } from '@/redux/auth/authSlice';

export default function SignInPage() {

  const dispatch = useDispatch();
  const user = useSelector(SelectUser)


  const signInWithGoogleHandler = async () => {


    try {
      const { user } = await signInWithGooglePopup();
      createUserDocumentFromAuth(user);
      dispatch(setUser(user))

    }
    catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    dispatch(removeUser(null));
  }
  return (

    <div className="container">
      {!user ? (
        <div className="innerContainer">
          <section className="brand">
            <h3>OmarBook</h3>
            <h5>OmarBook helps you connect and share with the people in your life.</h5>
          </section>
          <section>
            <div className="form">
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
                <Link href={'/'} style={{ textDecoration: 'none', color: 'white' }}>Sign in with Google</Link>

              </button>
            </div>
          </section>
        </div>
      ) : <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>The User already sign in</h1>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
          <button style={{ width: '150px', height: '25px', backgroundColor: '#1877f2', borderRadius: '10px', borderStyle: 'none' }}>
            <Link href={'/'} style={{ textDecoration: 'none', color: 'white' }}>Go To Home Page</Link>
          </button>
          <button style={{ width: '150px', height: '25px', backgroundColor: '#1877f2', borderRadius: '10px', borderStyle: 'none', color: 'white', marginLeft: '20px' }} onClick={logoutHandler}>
            <Link href={'/SignIn'} style={{ textDecoration: 'none', color: 'white' }}>Logout</Link>
          </button>
        </div>

      </div>}
    </div>
  );
}

