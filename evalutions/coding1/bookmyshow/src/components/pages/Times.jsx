import { useHistory } from "react-router-dom";
import {  useDispatch} from "react-redux"
import { changeStatus } from "../../store/actions";
export function Times() {
    const history = useHistory();
    const dipatch = useDispatch();
    return<div>
        <button onClick={()=>{
            dipatch(changeStatus())
            history.push("/shows")
        }}>06:00 am</button>
        <button onClick={()=>{
            dipatch(changeStatus())
            history.push("/shows")}}>11:00 am</button>
        <button onClick={()=>{
            dipatch(changeStatus())
            history.push("/shows")}}>03:00 pm</button>
        <button onClick={()=>{
            dipatch(changeStatus())
            history.push("/shows")}}>09:00 pm</button>
    </div>
}