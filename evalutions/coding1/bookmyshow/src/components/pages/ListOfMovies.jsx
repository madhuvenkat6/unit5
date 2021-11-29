import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
export function Movies() {
    const movies = useSelector((store) => store.movies)
    return<div style={{display:"flex",flexDirection:"column",padding:"20px"}}>
        <div>
            {movies.map((e) => <div >
              <Link to="/details">{e.name}</Link>
            </div>)}
        </div>

    </div>
}