import React, { useState } from 'react'
import './Tweetbox.css'
import { Avatar, Button } from '@material-ui/core'
// import { db, getCities } from './Firebase'
// import { doc, setDoc } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";

function writeUserData() {
  const db = getDatabase();
  set(ref(db, 'posts/' + "et8AtZEkGkQ2"), {
    displayName: "Ayush Tawar",
    username: "aayuuushhhh",
    verified: true,
    text: "tweetMessage",
    image: "tweetImage",
    avatar: "https://mui.com/static/images/avatar/1.jpg",
  });
}


function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    // setTweetMessage("");
    // setTweetImage("");
    // console.log("hey everynpemn")
    //  console.log(e)
    console.log(tweetMessage)
    writeUserData();

  };

  return (
    <div className='tweetbox'>
      <form>
        <div className='tweetbox__input'>
          <Avatar src='https://mui.com/static/images/avatar/1.jpg'></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetbox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text" />
        {/* error can't see the placeholder? for both inputs */}
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetbox__tweetbutton">
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default Tweetbox