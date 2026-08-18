import getApiUrl from "../utils/getApiUrl";
import { useState } from "react";

export function LoginPage() {
    const [password, setPassword] = useState(null);
    const [username, setUsername] = useState(null);


    async function createAccount() {
        const url = getApiUrl('/login')

        const result = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password,
                username
            })
        })

        console.log(result);
    }


    return (
        <div>
            <div className="registerOptions">
                <a href="http://localhost:8080/auth/google" >Login Via Google</a>
                <a href="http://localhost:8080/auth/github">Login Via Github</a>
                <button>Login Via Username & Password</button>
            </div>

            <a href="/dashboard">Dashboard</a>
            <form className="" method="post" onSubmit={createAccount}>
                <label htmlFor="username">Username: </label>
                <input id="username" name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

                <label htmlFor="password">Password: </label>
                <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </form>
        </div>
    )
}