import { useEffect, useState } from "react"
import getApiUrl from "../utils/getApiUrl";

import PostCard from "./PostCard"

export function FeedPage() {
    //fetching posts from either latest in global or friends only
    const [feeds, setFeeds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async() => {
            setLoading(true);

            try {
                 const url = getApiUrl("/posts")

            const response = await fetch(url, {
                method: "GET",
                headers : {
                    "Accept": "application/json"
                }
            })
            
            if (!response.ok) {
                throw new Error(`Http Error: ${response.status}`)
            }

            const currentFeeds = await response.json();

            setFeeds(currentFeeds)
            } catch (err) {
                console.error("Posts fetch failed", err);
            } finally {
                setLoading(false);
            }
        }
        
        fetchPosts();
    }, []);

    if (loading)
        return (
            <h1>Loading</h1>
        )

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
                {feeds.map((feed) => (
                    <div key={feed.id}>
                        {feed.title}
                    </div>
                ))}
            </div>
        </div>
    )
}