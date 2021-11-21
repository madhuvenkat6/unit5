import { AuthContext } from "../contexts/AuthContext";
import { useContext} from 'react';

export const NavBar = () => {
    const {toggleAuth} = useContext(AuthContext)

    return <div>
        <button onClick={()=>{
            toggleAuth(true)
        }}>Login</button>
        <button onClick={()=>{
             toggleAuth(false)
            // console.log(isAuth);
        }}>Logout</button>
    </div>
}