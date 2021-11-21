import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"

export const NavBar = () =>{
    const {theme,toggleTheme} = useContext(ThemeContext)
    return<div style={{height:"10vh",border:`1px solid ${theme.color}`}}>
        <button style={{display:"flex" ,float:"right"}}
         onClick={()=>{
           toggleTheme()
         }}>switch Mode</button>
         <h1>Nav</h1>
    </div>
}