import React from 'react';
import './Widgets.css';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type='text'/>
      </div>

      <div className='widgets__widgetContainer'>
        <h2>What's happening?</h2>
        <TwitterTweetEmbed tweetId={"1366007374499090433"} />

        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='YhUx7CpfW7fPaNT'
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={'www.einsvision.tk'}
          option={{text: '#react is awesome', via: 'einsvision'}} 
        />
      </div>
    </div>
  )
}

export default Widgets
