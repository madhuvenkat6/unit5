import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react"

export const Body = () =>{
    const {theme} = useContext(ThemeContext)
    return <div style={{height:"80vh",border:`1px solid ${theme.color}`}}>
        <h1>Body</h1>
        <input type="text" placeholder="enter the text"/>
        <input type="text" placeholder="enter the text"/>
        <button>check</button>
    </div>
}