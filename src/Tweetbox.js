import React from 'react'
import './Tweetbox.css'
// import { getAuth } from "firebase/auth";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Avatar, Button } from '@material-ui/core'
// import { db, getCities } from './Firebase'
// import { doc, setDoc } from "firebase/firestore";
// import { getDatabase, ref, set } from "firebase/database";

function Tweetbox() {
//   const [tweetMessage, setTweetMessage] = useState("");
//   const [tweetImage, setTweetImage] = useState(""); 
//   const [userid, setuserid] = useState("et8AtZEkGkQzG2FYDUx0nNvRnb72")

 

  // const auth = getAuth();
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;
  //     setuserid(uid)
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // });

  // useEffect(() => {
  //   const auth = getAuth();
  //   // onAuthStateChanged(auth, (user) => {
  //   //   if (user) {
  //   //     // User is signed in, see docs for a list of available properties
  //   //     // https://firebase.google.com/docs/reference/js/firebase.User
  //   //     const uid = user.uid;
  //   //     setuserid(uid)
  //   //     // ...
  //   //   } else {
  //   //     // User is signed out
  //   //     // ...
  //   //   }
  //   // });

  //   console.log(auth)
  //   // setuserid(auth.currentUser.uid)
  // })

  // const sendTweet = (e) => {
  //   e.preventDefault();
  //   setTweetMessage("");
  //   setTweetImage("");
    
  //   // const userId = auth.currentUser.uid;
  //   const db = getDatabase();
  //   set(ref(db, 'posts/' + userid), {
  //     displayName: "Ayush Tawar",
  //     username: "aayuuushhhh",
  //     verified: true,
  //     text: "tweetMessage",
  //     image: "tweetImage",
  //     avatar: "https://mui.com/static/images/avatar/1.jpg",
  //   });

  // };

  return (
    <div className='tweetbox'>
      <form>
        <div className='tweetbox__input'>
          <Avatar src='https://mui.com/static/images/avatar/1.jpg'></Avatar>
          <input
            // onChange={(e) => setTweetMessage(e.target.value)}
            // value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          // value={tweetImage}
          // onChange={(e) => setTweetImage(e.target.value)}
          className="tweetbox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text" />
        {/* error can't see the placeholder? for both inputs */}
        <Button
          // onClick={sendTweet}
          type="submit"
          className="tweetbox__tweetbutton">
          Tweet
        </Button>
      </form>
    </div>
  )
}

export default Tweetbox
