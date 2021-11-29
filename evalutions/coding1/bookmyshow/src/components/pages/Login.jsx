import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useHistory } from "react-router-dom";
import "../Nav.css"
export function Login() {
    const {handleToken} = useContext(AuthContext);
    const history = useHistory();
    console.log(history);
    return <div className="login-page">
        <div className="login" >
            <input type="email" placeholder="Enter email" />
            <input type="password" placeholder="password" />
            <button onClick={()=>{
                handleToken();
                history.push("/shows")
            }}>Login</button>
        </div>

    </div>
}