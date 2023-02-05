import { Link } from "react-router-dom";
import "./Post.css";

function Post({
  character_pic,
  character,
  time,
  tweet,
  hashtag_link,
  character_link,
  hashtag,
}) {
  const likeIcon = (
    <i
      data-visualcompletion="css-img"
      className="x1b0d499 x1d69dk1"
      style={{
        backgroundImage:
          "url('https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/Yffinjush8w.png')",
        backgroundPosition: "0 -201px",
        backgroundSize: "auto",
        width: "18px",
        height: "18px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
      }}
    />
  );
  return (

    <div className="post_container">
      <Link to={"/" + character_link}>
        <img className="post_image" src={character_pic} />
      </Link>
      <div>
        <div>
          <Link to={"/" + character_link} className="post_character">
            {character}
          </Link>
          <div className="post_time">{time}</div>
        </div>
        <div className="post">{tweet}</div>
        <Link to={"/" + hashtag_link} className="post_hashtag">
          {hashtag}#
        </Link>
      </div>
    </div>
  );
}

export default Post;
