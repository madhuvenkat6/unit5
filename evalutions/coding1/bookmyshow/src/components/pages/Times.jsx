import { useHistory } from "react-router-dom";
export function Times() {
    const history = useHistory();
    return<div>
        <button onClick={()=>{history.goBack()}}>06:00 am</button>
        <button onClick={()=>{history.goBack()}}>11:00 am</button>
        <button onClick={()=>{history.goBack()}}>03:00 pm</button>
        <button onClick={()=>{history.goBack()}}>09:00 pm</button>
    </div>
}