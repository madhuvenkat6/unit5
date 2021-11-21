import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)
    const [token,setToken] = useState("")
    // const [email, setEmail] = useState({
    //     mail:"",
    //     password:""
    // })
    
    // const handleMail = (email,psd)=>{
    //     setEmail({mail:email,password:psd})
    // }

    const toggleAuth = (val) =>{
        setIsAuth(val) 
    }


    useEffect(()=>{
        if(isAuth){
            axios.post("https://reqres.in/api/login",
            {
                "email": "kahjsjkh@gmail.com",
                "password": "123456789"
            })
            .then((res)=>res.data.token)
            .then((res)=>{
                setToken(res)
            })
        }
    },[isAuth])
    return <AuthContext.Provider value={{token, isAuth, toggleAuth}}>{children}</AuthContext.Provider>
}
