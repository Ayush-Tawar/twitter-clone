import React from 'react'
import './Widgets.css'
import { TwitterTweetEmbed, TwitterShareButton,
  TwitterTimelineEmbed, } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1539615316052832256"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="aayuuushhhh"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://www.instagram.com/p/CfHI9DyPdUH/"}
          options={{ text: "#reactjs is awesome", via: "aayuuushhhh" }}
        />
      </div>
    </div>
  )
}

export default Widgets