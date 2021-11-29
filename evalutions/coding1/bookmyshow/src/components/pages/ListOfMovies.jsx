import {Link} from "react-router-dom"
export function Movies() {
    return<div style={{display:"flex",flexDirection:"column",padding:"20px"}}>
        <Link to="/details">Movie1</Link>
        <Link to="/details">Movie2</Link>
        <Link to="/details">Movie3</Link>
    </div>
}