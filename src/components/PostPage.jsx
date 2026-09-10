//contains the comments and stuff ig
import getApiUrl from "../utils/getApiUrl"
import { useState } from "react";

function PostPage({ post }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  async function toggleLikePost() {
    const url = getApiUrl("/likePost");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ postId: post.id })
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
      <h1>{post._count.likes}</h1>
      <button onClick={toggleLikePost}>Like Post</button>
      <h1>{post.title}</h1>
      <h2>{post.content}</h2>
      <form onSubmit={commentOnPost} className="comment">
        <textarea placeholder="Share your thoughts!" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
      </form>
      <h1>Comment Section: </h1>
      <div className="comments">
      </div>
    </div>
  )
}

export default PostPage;
