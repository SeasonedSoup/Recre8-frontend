import { useAuth } from "./auth/AuthContext"
import userDefault from "../assets/user-default.png"
import "../styles/Header.css"

export function Header() {
    const {user, logout} = useAuth();

    return (
    <div className="header">
        <h1 className="favicon">Recre8</h1>

        <nav className="navbar">
            <button>Public Feed</button>
            <button>My Feed</button>
            <button>Confidants</button>
            <button>Users</button>

            <img className="profile-img" src={user.avatar || userDefault} alt="your avatar" />
            <button onClick={logout}>Logout</button>
        </nav>
    </div>
    )
}