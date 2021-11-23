import { Card } from "./CartDetails"
import {data} from "../data.json"

export const Home = ()=>{
   return<div>
       {
        data.map((e)=><div key={e.id}>
          <Card data={e}/>
        </div>)
      }
   </div> 
}