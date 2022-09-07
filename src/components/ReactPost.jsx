import Liked from "./ReactLiked"
import { useState } from "react";

const ReactPost = (props) => {

const [likedPost, setlikedPost] = useState(true);

  return (
    <div className="ReactPost">
      <h2 className="Question">{props.question}</h2>
      <p>{props.answer}</p>
      {likedPost ? (
        <button className="LikeButton" onClick={() => {setlikedPost(!likedPost)}}>Gilla</button>
      ) : !likedPost && (<Liked />)}
    </div>
  )
}

export default ReactPost