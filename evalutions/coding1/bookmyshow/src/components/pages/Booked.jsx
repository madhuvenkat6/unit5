import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"
export function Booked() {
    const history = useHistory();
    const isBooked = useSelector((store) => store.isBooked)
    console.log(isBooked);
    if(!isBooked){
        return<div>
        <button disabled={true} style={{backgroundColor:"red",color:"white",position:"absolute",right:"0"}}>NotBooked</button>
        </div>
    }
    else{
        return<div>
            <button style={{backgroundColor:"Green",color:"white",position:"absolute",right:"0"}} 
            onClick={()=>{
                history.replace("/ticket")
            }}
            >Booked</button>
        </div>
    }
    
  
    
}