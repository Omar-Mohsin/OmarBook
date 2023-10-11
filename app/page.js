"use client"
import React from 'react';
import Link from 'next/link';
import './page.css';
import { NavigationButtons } from '@/components';
import { useDispatch, useSelector } from 'react-redux';
import { SelectUser } from '@/redux/auth/authSlice';
import { addPost } from '@/redux/posts/postSlice';
import { useState } from 'react';
import {NotAutho} from '@/components';
export default function Home() {

  const user = useSelector(SelectUser);
  const [postText , setPostText] = useState('');
  const dispatch = useDispatch();
  const PostHandler = (e)=>{
    setPostText(e.target.value);
  }

  const addingPostHandler = ()=>{
    console.log(postText)
    dispatch(addPost(postText));
  }
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
                onChange={PostHandler}
              />
              <button className="postButton" onClick={addingPostHandler}>Post</button>
            </div>
          </section>
        </div>
      ) :
       <NotAutho/>
      }

    </div>
  );
}
