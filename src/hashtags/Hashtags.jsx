import { Link } from "react-router-dom"
import "./Hashtags.css";
import { arrayOfHashtags } from "./ArrayOfHashtags.jsx";

function Hashtags() {
  return (
    <div className="hashtags_container">
      {arrayOfHashtags.map((ele) => {
        return (
          <Link to={"/" + ele.hashtag_link} className="hashtag_container">
            {ele.hashtag}#
          </Link>
        );
      })}
    </div>
  );
}

export default Hashtags;
