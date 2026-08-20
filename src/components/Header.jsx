import { useAuth } from "./auth/AuthContext"
import userDefault from "../assets/user-default.png"
import "../styles/Header.css"

export function Header({setActivePage}) {
    const {user, logout} = useAuth();

    return (
    <div className="header">
        <h1 className="favicon">Recre8</h1>

        <nav className="navbar">
            <button onClick={() => setActivePage("Public Feed")}>Public Feed</button>
            <button onClick={() =>setActivePage("My Feed")}>My Feed</button>
            <button onClick={() =>setActivePage("Confidants")}>Confidants</button>
            <button onClick={() => setActivePage("Users")}>Users</button>

            <img onClick={() => setActivePage("Profile")} className="profile-img" src={user.avatar || userDefault} alt="your avatar" />
            <button onClick={logout}>Logout</button>
        </nav>
    </div>
    )
}