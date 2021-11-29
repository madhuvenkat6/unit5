import { useHistory } from "react-router-dom";
export function Details() {
    const history = useHistory();
    return<div>
        <h1>complete details</h1>
        <h2>some random movie</h2>
        <p>hdbhsvdbjfbjsjldjsdbjb</p>
        <button onClick={()=>{
            console.log("select time");
            history.push("/times")
        }}>Book</button>
        <button onClick={()=>{
            history.goBack();
        }}>GoBack</button>
    </div>
    
}