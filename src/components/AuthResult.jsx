import { useEffect, useState } from "react";
import { useNavigate } from "react-router"

export function AuthResult() {
    const navigate = useNavigate();
    const [seconds, setSeconds] = useState(3);
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setSeconds((prev) => prev - 1)
        }, 1000)

        if (seconds === 0) {
            navigate('/dashboard');
        }

        return () => clearTimeout(timeOutId);
    }, [navigate, seconds])

    return (
        <div>
            <h1> YOU ARE SUCCESSFULLY AUTHENTICATED</h1>
            <h1>Navigating to dashboard in {seconds} {seconds === 1 ? "seconds" : "seconds"}</h1>
        </div>
    )
}