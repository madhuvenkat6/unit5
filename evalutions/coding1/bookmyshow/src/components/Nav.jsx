import {Link} from "react-router-dom"
import "./Nav.css"
export function Nav() {
    return<div className="nav">
        <Link to="/">Home</Link>
        <Link to="/shows">shows</Link>
        <Link to="/about">About</Link>
        <Link to="/newshows">Newshows</Link>
        <Link to="/login">Login</Link>
    </div>
}