import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false); 
  const [count, setCount] = useState(0); 

  const handleClick = () => {
    if (liked) {
      setCount(count - 1);
      setLiked(false);
    } else {
      setCount(count + 1);
      setLiked(true);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={liked ? "liked" : ""}
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>
      <p>{count} {count === 1 ? "like" : "likes"}</p>

    </div>
  );
}

export default LikeButton;
