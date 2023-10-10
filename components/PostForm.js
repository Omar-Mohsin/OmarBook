"use client"
import React from 'react';
import Link from 'next/link';
import './PostForm.css';
import NavigationButtons from './NavigationButtons';
import { useDispatch, useSelector } from 'react-redux';
import { SelectUser } from '@/redux/auth/authSlice';
export default function PostForm() {

  const user = useSelector(SelectUser);

  return (
    <div className="container">
      {user ? (
        <div className="innerContainer">
          <section className="brand">
            <h3>OmarBook</h3>
            <h5>
              Welcome <span style={{ color: 'green' }}>{user?.displayName} </span>to <span className="highlighted-text">OmarBook</span>, please feel free to navigate the app and create posts
            </h5>
            <div className='navigation'>
              <NavigationButtons />
            </div>
          </section>
          <section>
            <div className="form">
              <textarea
                rows="10" cols="48"
                type="text"
                placeholder="Write your post here..."
              />
              <button className="postButton">Post</button>
            </div>
          </section>
        </div>
      ) :
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          You are not authorize to go to this page
          <button style={{ width: '150px', height: '30px', backgroundColor: '#1877f2', borderRadius: '10px', borderStyle: 'none', marginTop: '20px' }}>
            <Link href={'/SignIn'} style={{ color: 'white', textDecoration: 'none', fontSize: '17px' }}>go sign in page</Link>
          </button>
        </div>
      }

    </div>
  );
}
