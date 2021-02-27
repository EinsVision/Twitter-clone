import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

function Post({
  displayName,
  username,
  verified,
  text,
  // timestamp,
  image,
  avatar
}) {
  return (
    <div className='post'>
      <div className='post__avatar'>
        <Avatar
          src='https://lh3.googleusercontent.com/ogw/ADGmqu9GElmcJVjw3GzbcE1wI1U9xhBf4fVroMKcCYsX=s32-c-mo' 
        />
      </div>
      <div className='post__body'>
        <div className='post__header'>
          <div className='post__headerText'>
            <h3>
              Einsvision <span></span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
