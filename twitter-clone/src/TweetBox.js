import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './TweetBox.css';

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar
            src='https://lh3.googleusercontent.com/ogw/ADGmqu9GElmcJVjw3GzbcE1wI1U9xhBf4fVroMKcCYsX=s32-c-mo'
          />
          <input placeholder="What's happening?" type='text'/>
        </div>
        <input className='tweetBox__imageInput' placeholder="Optional: Enter image URL" type='text'/>
        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
