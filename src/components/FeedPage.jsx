import { useState } from "react"
import PostCard from "./PostCard"

export function FeedPage() {
    //fetching posts from either latest in global or friends only
    const [feeds, setFeeds] = useState([]);

    const fetchPosts = () => {
        const currentFeeds = []
        setFeeds(currentFeeds)
    }
    return (
        <div className="feedPage" style={{all: "inherit", width: "100%"}}>
             <PostCard>
                <form action="#" method="POST">
                    <textarea className="post-form"placeholder="Share what your thinking!"></textarea>
                    <hr />
                    <button>Post</button>
                    <button type="button">+</button>
                </form>
            </PostCard>
            <div className="feed"> 
                {feeds.map((feed) => {

                })}
            </div>
        </div>
    )
}