import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import "../Nav.css"
export function Login() {
    const {token} = useContext(AuthContext);
    console.log(token);
    return <div className="login-page">
        <div className="login" >
            <input type="email" placeholder="Enter email" />
            <input type="password" placeholder="password" />
            <button>Login</button>
        </div>

    </div>
}