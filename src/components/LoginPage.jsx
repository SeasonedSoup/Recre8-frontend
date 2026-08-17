export function LoginPage() {
    


    return (
        <div>
            <div className="registerOptions">
                <button>Login Via Google</button>
                <button>Login Via Github</button>
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