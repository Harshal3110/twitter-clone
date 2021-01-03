import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
  TwitterShareButton,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1344219458324160512"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="elonmusk"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/groups/spaceXverse/about"}
          options={{ text: "#spacex is lit", via: "spacex" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
