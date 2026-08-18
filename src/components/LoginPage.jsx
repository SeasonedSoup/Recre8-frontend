

export function LoginPage() {
    return (
        <div>
            <div className="registerOptions">
                <a href="http://localhost:8080/auth/google" >Login Via Google</a>
                <a href="http://localhost:8080/auth/github">Login Via Github</a>
                <button>Login Via Username & Password</button>
            </div>

            <form className="" action="#">
                <label htmlFor="username">Username: </label>
                <input id="username" name="username" type="text"/>

                <label htmlFor="password">Password: </label>
                <input id="password" name="password" type="password" />
            </form>
        </div>
    )
}