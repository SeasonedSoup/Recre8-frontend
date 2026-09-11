import { useEffect, useState } from "react"
import getApiUrl from "../utils/getApiUrl";

import PostCard from "./PostCard"
import PostPage from "./PostPage"
export function FeedPage() {
  //fetching posts from either latest in global or friends only
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);

  //title contents and images 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  //shows the activePost
  const [activePost, setActivePost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const url = getApiUrl("/posts")

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Accept": "application/json"
          }
        })

        if (!response.ok) {
          throw new Error(`Http Error: ${response.status}`)
        }

        const currentFeeds = await response.json();
        setFeeds(currentFeeds);
        console.log(currentFeeds);
      } catch (err) {
        console.error("Posts fetch failed", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);


  const createPost = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);


      const url = getApiUrl("/create-post");

      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        body: formData
      })

      if (!response.ok) {
        throw new Error(`Http Error: ${response.status}`)
      }
    } catch (err) {
      console.error(err);
    } finally {
      setTitle("");
      setContent("");
    }
  }

  const viewActivePost = async (post) => {
    setActivePost(post);
  }

  if (loading)
    return (
      <h1>Loading</h1>
    )

  return (
    <div className="feedPage">
      <div className="feedContainer">
        <PostCard>
          <form onSubmit={createPost} method="POST">
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className="post-form" placeholder="Share what your thinking!" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <hr />
            <button>Post</button>
            <button type="button">+</button>
          </form>
        </PostCard>
        <div className="feed">
          {feeds.map((feed) => (
            <div className="feedCard" key={feed.id}>
              <h3>Author: {feed.author.username} {feed.title}</h3>
              <h6>{feed.content}</h6>
              <div>
                <button onClick={() => viewActivePost(feed)}>View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {activePost && <div className="activePost">
        <h1>Active Post</h1>
        <button onClick={() => setActivePost(null)}>X</button>
        <PostPage post={activePost} />
      </div>}
    </div>
  )
}
