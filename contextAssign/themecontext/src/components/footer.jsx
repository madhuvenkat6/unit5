import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"
export const Footer = ()=>{
    const {theme} = useContext(ThemeContext)
    return <div style={{height:"10vh",border:`1px solid ${theme.color}`}}>
        <h1>Footer</h1>
    </div>
}