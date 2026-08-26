import PostCard from "./PostCard"

export function FeedPage() {
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
                <h1>HI THIS IS YOUR FEED</h1>
            </div>
        </div>
    )
}