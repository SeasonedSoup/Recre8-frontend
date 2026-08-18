import { useEffect } from "react";
import { useNavigate } from "react-router"

export function AuthResult() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/dashboard')
        }, 3000)
    }, [navigate])

    return (
        <div>
            <h1> YOU ARE SUCCESSFULLY AUTHENTICATED</h1>
            <h1>Navigating to dashboard in a few seconds</h1>
        </div>
    )
}