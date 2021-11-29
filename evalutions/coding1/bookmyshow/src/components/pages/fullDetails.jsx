import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"

export function Details() {
    const history = useHistory();

    const movie = useSelector((store) => store.movie)
    console.log(movie);
    return <div>
        <div>
           <div style={{ height: "200px", width: "250px", border: "1px solid black" ,margin:"auto",marginTop:"20px",borderRadius:"10px"}}>
                <h3>Name:{movie.name}</h3>
                <p>About:{movie.description}</p>
                <h6>Genre:{movie.genre}</h6>
            </div>
        </div>
        <button onClick={() => {
                    console.log("select time");
                    history.push("/times")
                }}>Book</button>
        <button onClick={() => {
            history.goBack();
        }}>GoBack</button>
    </div>

}