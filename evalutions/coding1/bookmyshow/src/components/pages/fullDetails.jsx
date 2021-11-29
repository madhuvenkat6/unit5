import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux"

export function Details() {
    const history = useHistory();

    const movies = useSelector((store) => store.movies)
    console.log(movies);
    return <div>
        <div>
            {movies.map((e) => <div style={{ height: "200px", width: "250px", border: "1px solid black" ,margin:"auto",marginTop:"20px",borderRadius:"10px"}}>
                <h3>Name:{e.name}</h3>
                <p>About:{e.description}</p>
                <h6>Genre:{e.genre}</h6>
                <button onClick={() => {
                    console.log("select time");
                    history.push("/times")
                }}>Book</button>
            </div>)}
        </div>

        <button onClick={() => {
            history.goBack();
        }}>GoBack</button>
    </div>

}