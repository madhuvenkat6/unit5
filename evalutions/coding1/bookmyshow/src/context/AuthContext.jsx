import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [token, setToken] = useState(false);
    const handleToken = (token) =>{
        setToken(true);
    }
    return <AuthContext.Provider value={{token,handleToken}}>{children}</AuthContext.Provider>
}

