import React from 'react'
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
function Post({post}) {
  return (
    <div className="post-area" >
      <div className="post-header">
        <img
          src="https://placekitten.com/40/40"
          alt="User Profile"
          className="user-profile"
        />
        <span className="user-name">John Doe</span>
      </div>
      <p className="post-content">
       {post}
      </p>
      <div className="post-actions">
       <ThumbUpIcon style={{color : '#1877f2' , marginTop : '5px'}}></ThumbUpIcon>
        <button className="comment-button">Comment</button>
        <button className="share-button">Share</button>
      </div>
    </div>
  )
}

export default Post