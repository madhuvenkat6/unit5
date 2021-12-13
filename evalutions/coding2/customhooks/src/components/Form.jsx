import { useEffect, useState } from "react"
import axios from "axios"

export function Form  () {

    const [details,setDetails] = useState({first_name:"",last_name:"",dob:""});
    const [state,setState] = useState(true)

    const handleChange = (e) =>{
        let {name,value}= e.target;
        setDetails({...details,[name]:value}) 
    }

    const handleOnClick = ()=>{
        console.log(details);
        setState(!state)
    }

    useEffect(()=>{
        axios.post("http://localhost:3004/user",details)
    },[state])

    return <>
        <div style={{display:"flex" , flexDirection:"column", width:"300px",margin:"auto"}}>
            <input type="text" placeholder="Enter the first Name" name = "first_name" onChange = {handleChange}/>
            <input type="text" placeholder="Enter the last Name" name = "last_name" onChange = {handleChange} />
            <input type="date" placeholder="DOB" name="dob" onChange = {handleChange} />
            <button onClick={handleOnClick}>Submit</button>
        </div>
    </>
}