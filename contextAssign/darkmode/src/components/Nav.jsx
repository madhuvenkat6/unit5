import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

import "./bar.css"
export const NavBar = () =>{
    const {theme} = useContext(ThemeContext);
   
    return<div style={{height:"100vh",width:"15vh",border:`1px solid ${theme.color}`}}>
        <div>
        <img src="https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636" alt="kjsd" style={{height:"50px",width:"50px",border:"1px solid black",marginTop:"30px",borderRadius:"25px"}}/>
        </div>
        <br/>
        <div style={{display:"flex", flexDirection:"column",margin:"auto" ,backgroundColor:"whitesmoke",alignItems:"center",justifyContent:"space-between",position:"absolute",top:"30%",left:"2.5%"}}>
           <button> <img src="https://icon-library.com/images/signal-icon-png/signal-icon-png-26.jpg" alt="kjsd" style={{height:"30px",width:"30px",backgroundColor:`${theme.backgroundColor}`}}/></button>
            <br/>
            <div className='bar'></div>
            <br/>
            <img src="https://www.svgrepo.com/show/179276/chat-communication.svg" alt="kjsd" style={{height:"30px",width:"30px"}}/>
            <br/>
            <div className='bar'></div>
            <br/>
            <img src="https://www.svgrepo.com/show/84229/documents.svg" alt="kjsd" style={{height:"30px",width:"30px"}}/>
            <br/>
            <div className='bar'></div>
            <br/>
            <img src="https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png" alt="kjsd" style={{height:"30px",width:"30px"}}/>
            <br/>
            
        </div>    

        <div>
        <img src="https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png" alt="kjsd" style={{height:"20px",width:"20px",border:"1px solid black",marginBottom:"20px",borderRadius:"10px",
    marginLeft:"-10px", position: "absolute", bottom:"10px",backgroundColor:"green"}}/>
        </div> 
    </div>
}