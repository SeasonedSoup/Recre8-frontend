import { useAuth } from "./auth/AuthContext"

export function Dashboard() {
    const {user, loading, logout} = useAuth();

    if (loading) {
        return <h1>loading...</h1>
    }
    console.log(user);

    if (!user) {
        return <div>Access Denied Pls Log In</div>
    }

    return (
        <div>
            <h1>RECRE8</h1>
            <h1>{user.username}</h1>
            <button onClick={logout}>Logout</button>
        </div>
    )
}