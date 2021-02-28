import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import db from './firebase';
import './TweetBox.css';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = e => {
    e.preventDefault();

    // add to tweet messages on homepage
    db.collection('posts').add({
      displayName: 'changdae',
      username: 'einsvision',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: 'https://lh3.googleusercontent.com/ogw/ADGmqu9GElmcJVjw3GzbcE1wI1U9xhBf4fVroMKcCYsX=s32-c-mo'
    });

    setTweetMessage('');
    setTweetImage('');
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
          <Avatar
            src='https://lh3.googleusercontent.com/ogw/ADGmqu9GElmcJVjw3GzbcE1wI1U9xhBf4fVroMKcCYsX=s32-c-mo'
          />
          <input 
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?" 
            type='text'
          />
        </div>
        <input 

          value={tweetImage}
          onChange={e => setTweetImage(e.target.value)}
          className='tweetBox__imageInput' 
          placeholder="Optional: Enter image URL" 
          type='text'
        />
        <Button
          onClick={sendTweet}
          type='submit'
          className='tweetBox__tweetButton'
        >Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
