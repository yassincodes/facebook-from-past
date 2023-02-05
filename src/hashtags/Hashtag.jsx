import { arrayOfTweets } from "./ArrayOfTweets.jsx";
import { useLocation } from "react-router-dom";
import Tweet from "./Tweet";
import "./Home.css";

function Hashtag() {
  const location = useLocation();
  return (
    <div className="Home">
      {arrayOfTweets
        .filter((ele) => ele.hashtag_link === location.pathname.slice(1))
        .map((ele) => {
          return (
            <Tweet
              character_pic={ele.character_pic}
              character={ele.character}
              tweet={ele.tweet}
              time={ele.time}
              hashtag={ele.hashtag}
              hashtag_link={ele.hashtag_link}
              character_link={ele.character_link}
            />
          );
        })}
        <div style={{visibility: "hidden", height: "10vh"}}>empty</div>
    </div>
  );
}

export default Hashtag;
