import axios from "axios";
import { useEffect, useState } from "react";

export function useNotification(title){
    
}

export function useFetch(url){

   const [data,setData] = useState([])

   useEffect(()=>{
    axios.get(url).then(res=>res.data).then((res)=>{
        setData(res)
    })
   },[])
  
    return data;
}