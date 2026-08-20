import getApiUrl from "../utils/getApiUrl";
import { useState } from "react";
import '../styles/LoginPage.css'
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
        <div className="formContainer">
            <div className="box-container">
            
                <a href="http://localhost:8080/auth/google" >Login with Google</a>
                <a href="http://localhost:8080/auth/github">Login with Github</a>
                <button>Login Via Username & Password</button>
                <h1>or</h1>
                <button>Sign up with an account</button>

                <form className="" method="post" onSubmit={createAccount}>
                    <label htmlFor="username">Username: </label>
                    <input id="username" name="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>

                    <label htmlFor="password">Password: </label>
                    <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </form>

                <a href="/dashboard">Dashboard</a>
                <button>Guest Account</button>
             </div>

        </div>
    )
}