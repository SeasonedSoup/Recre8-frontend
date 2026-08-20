import { useState } from "react";
import "../styles/Dashboard.css"

import { useAuth } from "./auth/AuthContext"
import { Header } from "./Header";
import PostCard from "./PostCard";

export function Dashboard() {
    const {user, loading} = useAuth();
    const [activePage, setActivePage] = useState("Public Feed")
    if (loading) {
        return <h1>loading...</h1>
    }
    console.log(user);

    if (!user) {
        return <div>Access Denied Pls Log In</div>
    }



    return (
        <div className="body">
            <Header setActivePage={setActivePage}></Header>
            <h1 className="activePage">{activePage}</h1>
            <div className="main-content">
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
        </div>
    )
}