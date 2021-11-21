import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"


export const Body = () =>{
    const [bg,setBg] = useState("white")
    const [pos,setPos] = useState('0%')
    const [cl,setCl] = useState("lightblue")

    const {theme,toggleTheme} = useContext(ThemeContext);
    
    const handleToggle = ()=>{

        if(bg === "white"){
            setBg("black")
            setPos("68%")
            setCl("lightgreen")
        }
       else{
        setBg("white")
        setPos("0%")
        setCl("lightblue")
       }
        
       toggleTheme()
    }

    return<div style={{height:"100vh",width:"100%",border:`1px solid ${theme.color}`}}>
            <h1>My Dashboard</h1>
            <button style={{height:"40px",width:"80px",borderRadius:"20px" ,backgroundColor:`${bg}`,transition:"0.4s"}}
            onClick={()=>{
                handleToggle()
            }}
            >
                <div style={{height:"30px",width:"30px",borderRadius:"15px",backgroundColor:`${cl}`,position:"relative",right:"10%",left:`${pos}`,transition:"0.4s"}}></div>
            </button>
    </div>
}