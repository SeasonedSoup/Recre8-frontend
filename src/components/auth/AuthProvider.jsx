import { useEffect, useState} from "react";
import getApiUrl from "../../utils/getApiUrl"
import { AuthContext } from "./AuthContext";


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function verifyAuth() {

            const url = getApiUrl("/auth/get-user");
            
            try {
           
                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: 'include'
                })

                if (!response.ok) {
                    setUser(null);
                    return;
                }

                const result = await response.json()
                console.log('result:', result)
                setUser(result)
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        } 

        verifyAuth()
        console.log("VERIFYING TOKEN")
    }, []);

    const login = (user) => {
        setUser(user);
    }

    const logout = async() => {
        try {
            const url = getApiUrl('/auth/logout')

            const response = await fetch(url, {
                method: "POST",
                credentials: "include"
            })

            console.log(response)
        } catch (err) {
            console.error(err)
        }
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

