import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

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
              Changdae <span className='post__headerSpecial' >
                <VerifiedUserIcon className='post__dagde' />
                @Einsvision
              </span>
            </h3>
          </div>
          <div className='post__headerDescription'>
            <p>I chanllenge to build a Twitter Clone.</p>
          </div>
        </div>
        <img 
          src='https://media.giphy.com/media/wKK8sVr6lo2zG11dUb/giphy.gif' 
          alt=''
        />
        <div className='post__footer'>
          <ChatBubbleOutlineIcon fontSize='small' />
          <RepeatIcon fontSize='small' />
          <FavoriteBorderIcon fontSize='small'/>
          <PublishIcon fontSize='small' />
        </div>
      </div>
    </div>
  )
}

export default Post
