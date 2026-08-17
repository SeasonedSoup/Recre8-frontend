import { useEffect, useState} from "react";
import getApiUrl from "./getApiUrl";
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function verifyAuth() {
            const token = localStorage.getItem('token');

            if (!token) {
                setLoading(false);
                return;
            }

            const url = getApiUrl("/get-user");
            
            try {
           
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })

                if (!response.ok) {
                    localStorage.removeItem("token");
                    setUser(null);
                    return;
                }

                const result = await response.json()
                setUser(result)

            } catch (err) {

                console.error(err);
            } finally {
                setLoading(false);
            }
        } 

        verifyAuth()
        console.log("TOKEN VERIFIED")
    }, []);

    const login = (user, token) => {
        localStorage.setItem("token" , token);
        setUser(user);
    }

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

