import { useAuth } from "../utils/AuthContext"

export function Dashboard() {
    const {user, loading} = useAuth();

    if (loading) {
        return <h1>loading...</h1>
    }
    console.log(user);
    return (
        <div>
            <h1>DASHBOARD</h1>
            <h1>{user.username}</h1>
        </div>
    )
}