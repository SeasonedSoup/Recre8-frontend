//contains the comments and stuff ig
import getApiUrl from "../utils/getApiUrl"
import { useState } from "react";

function PostPage({ post }) {
  const [comments, setComments] = useState(post.comments);
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

  async function commentOnPost(e) {
    e.preventDefault();

    const url = getApiUrl("/create-comment");

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ comment, postId: post.id })
    })


    if (!response.ok) {
      console.error("HTTP ERROR", response.status);
    }

    const result = await response.json();
    console.log(result);
    setComment("");
  }

  async function upvoteComment(commentId) {
    const url = getApiUrl("/upvoteComment");
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ commentId })
    });

    if (!response.ok) {
      console.error("HTTP ERROR", response.status);
    }


    const result = await response.json();
    console.log(result);
  }

  return (
    <div>
      <h1>{post._count.likes}</h1>
      <button onClick={toggleLikePost}>Like Post</button>
      <h1>{post.title}</h1>
      <h2>{post.content}</h2>
      <form onSubmit={commentOnPost} className="comment">
        <textarea placeholder="Share your thoughts!" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        <button>Comment</button>
      </form>
      <h1>Comment Section: </h1>
      <div className="comments">
        {comments.map((comment) => (
          <div key={comment.id}>
            <img src={comment.commenter.avatar} alt=""></img>
            <h5>{comment.commenter.username}</h5>
            <h3>{comment.text}</h3>
            <h4>Likes: {comment._count.upvotes}</h4>
            <button onClick={() => upvoteComment(comment.id)}>Upvote</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostPage;
