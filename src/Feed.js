import React, { useState, useEffect } from 'react'
import './Feed.css'
import Post from './Post'
import Tweetbox from './Tweetbox'
import { db, getCities } from './Firebase'
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getCities(db).then(function(result) {
      setPosts(result)
    })

  }, []);

  return (
    <div className="feed">
      {/* header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <Tweetbox />  

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
      </FlipMove>

    </div>
  )
}

export default Feed