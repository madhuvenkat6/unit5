import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios"
export const ProductDetails = () => {
    const data = useParams();

    const [prdD, setPrd] = useState({})

    useEffect(()=>{
        try {
            axios.get(`http://localhost:3004/products/${data.id}`)
            .then((res)=>{
                //console.log(res.data);
                setPrd(res.data)
            })
        } catch (error) {
            console.log("Error");
        }
    },[])


    return <div>
      <h1>{prdD.name}</h1>
      <h1>{prdD.price}</h1>
    </div>
}