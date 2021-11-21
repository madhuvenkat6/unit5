import { createContext, useState } from "react";
import {mode} from "../components/style"
export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) =>{
    const [theme,setTheme] = useState(mode.light);
    const toggleTheme = () =>{
        if(theme === mode.light){
            setTheme(mode.dark)
        }else{
            setTheme(mode.light)
        }
        
    }
    return<ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
}