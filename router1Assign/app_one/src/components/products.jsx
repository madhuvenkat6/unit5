import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"


export const Products = () => {
    const [prds,setPrds] = useState([]);

    useEffect(()=>{
        try {
            axios.get("http://localhost:3004/products")
            .then((res)=>{
               setPrds(res.data)
            })
        } catch (error) {
            console.log("error");
        }
     
    },[])

    return <div>
        {
            prds.map((e)=><div key={e.id}>
                <h4>{e.name} | {e.price} |
                <Link to={`/products/${e.id}`}>More Details</Link>
                </h4>
            </div>)
        }
    </div>
}