import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import db from "./firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "A Great User",
      username: "acleveruser",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*",
    });

    setTweetMessage("");
    setTweetImage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="  What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
