import React from 'react';
import Link from 'next/link';
import './PostForm.css';
import NavigationButtons from './NavigationButtons';

export default function PostForm() {
  return (
    <div className="container">
      <div className="innerContainer">
        <section className="brand">
          <h3>OmarBook</h3>
          <h5>
            Welcome to <span className="highlighted-text">OmarBook</span>, please feel free to navigate the app and create posts
          </h5>
          <div className='navigation'>
          <NavigationButtons/>
            </div>
        </section>
        <section>
          <form className="form">
            <textarea
             rows="20" cols="50"
              type="text"
              placeholder="Write your post here..."
              className="formElement"
            />
            <button className="postButton">Post</button>
          </form>
        </section>
      </div>
    </div>
  );
}
