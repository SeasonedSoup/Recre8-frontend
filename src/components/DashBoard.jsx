import { useState } from "react";
import "../styles/Dashboard.css"

import { useAuth } from "./auth/AuthContext"
import { Header } from "./Header";

import { Profile } from "./Profile";
import { FeedPage } from "./FeedPage";
import { UserList } from "./UserList";

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

    function PageLoader(page) {
        switch (page) {
            case "Public Feed":
            case "My Feed":
                return <FeedPage/>
            case "Profile":
                return <Profile/>
            case "Confidants":
            case "Users":
                return <UserList/>
            default:
                return <h1>Unknown page</h1>
        }
    }



    return (
        <div className="body">
            <Header setActivePage={setActivePage}></Header>
            <h1 className="activePage">{activePage}</h1>
            <div className="main-content">
               {PageLoader(activePage)}
            </div>
        </div>
    )
}