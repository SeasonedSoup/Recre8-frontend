//contains the comments and stuff ig
import getApiUrl from "../utils/getApiUrl"
import { useState } from "react";

function PostPage() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  async function LikePost() {
    const url = getApiUrl("/likePost");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ comment })
    })

    if (!response.ok) {
      console.error("HTTP ERROR", response.status);
    }
    const result = await response.json();
    console.log(result);
  }

  async function commentOnPost() {
    const url = getApiUrl("/create-comment");
  }
  return (
    <div>
      <form onSubmit={commentOnPost} className="comment">
        <textarea placeholder="Share your thoughts!" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
      </form>
      <h1>Comment Section: </h1>
      <div className="comments"></div>
    </div>
  )
}

export default PostPage;
