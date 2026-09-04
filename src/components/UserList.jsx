import { useState, useEffect } from "react"
import getApiUrl from "../utils/getApiUrl"
import defaultAvatar from "../assets/user-default.png"

export function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    //fetch either friends or all existing users 
    useEffect(() => {
        const fetchUsers = async() => {
            try {
                const url = getApiUrl("/auth/users");

                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Accept": "application/json"
                    },
                    credentials: "include"
                })

                if (!response.ok) {
                throw new Error(`HTTP ERROR ${response.status}`);
                }

                const usersData = await response.json();
                setUsers(usersData)
            } catch (error) {
                console.error("Error: ", error);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, [])

    // adding a confidant
    const addFriend = () => {

    }

    // accepting an existing request for the user
    const acceptReq = () => {

    }

    const removeFriend = () => {
        
    }
    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <button>Requests</button>
            <div className="userList">
                {users.map(user => (
                    <div key={user.id} className="userRow">
                        <img className="profilePicture" src={user.avatar || defaultAvatar}></img>
                        {user.username}
                        <button>Add Friend</button>
                    </div>
                ))}
            </div>
        </>
    )
}