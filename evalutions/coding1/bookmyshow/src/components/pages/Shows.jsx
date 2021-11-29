import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

export function Shows() {
    const {token} = useContext(AuthContext);

    return<div>
        Shows
    </div>
}