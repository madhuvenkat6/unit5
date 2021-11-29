import {Link} from "react-router-dom"
import { Booked } from "./Booked"
export function Shows() {
    return<div>
        <Booked/>
        <div style={{display:"flex",flexDirection:"column",padding:"20px"}}>
        <Link to="/movies">Movies</Link>
        <Link to="/movies">plays</Link>
        <Link to="/movies">Evnets</Link>
        </div>
        </div>
}