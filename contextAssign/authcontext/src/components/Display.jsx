import { AuthContext } from "../contexts/AuthContext";
import { useContext} from 'react';

export const Display = () =>{
    const {token} = useContext(AuthContext)

    // const [email,setE] = useState("");
    // const [psd, setPsd] = useState("");

    // const handleChange = (e) =>{
    //     console.log(e.target.value);
    //     const {type,value} = e.target;
    //     if(type === 'text'){
    //         setE(value)
    //     }else{
    //         setPsd(value)
    //     }
    // }


    return<div>
        {/* <input type="text" placeholder="enter the email" onChange={(e)=>{
            handleChange(e);
        }}/>
        <input type="password" placeholder="password" onChange={(e)=>{
            handleChange(e);
        }}/>
        <button onClick={()=>{
            console.log(email,psd);
            handleMail(email,psd)
        }}>submit</button> */}
        <h4>Login Successfull</h4>
        <h5>User Token:{token}</h5>
    </div>
}