import { useHistory } from "react-router-dom";
export function Booked() {

    // return<div>
    //     <button disabled={true} style={{backgroundColor:"red",color:"white",position:"absolute",right:"0"}}>NotBooked</button>
    // </div>
    
const history = useHistory();
    return<div>
        <button style={{backgroundColor:"Green",color:"white",position:"absolute",right:"0"}} 
        onClick={()=>{
            history.replace("/ticket")
        }}
        >Booked</button>
    </div>
    
}