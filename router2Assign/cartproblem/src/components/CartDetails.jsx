import { useContext, useState } from "react";
import "../components/card.css"
import { CartContext } from "../contexts/AppContext";

export function Card({ data }) {

    const {handleCart} = useContext(CartContext);
    const [qty,setQty] = useState(data.qty);

    return <div className="card">
        <div style={{ width: "40%", marginTop: "8%" }}>
            <img src={data.image_url} alt="" />
        </div>
        <div style={{ width: "40%", height: "100%" }}>
            <div>
                <h4 style={{ height: "5%" }}>{data.product_name}</h4>
            </div>
            <div>
                <p style={{fontSize:"small"}}>{data.description}</p>
            </div>
            <div >
                <p >Rs.{data.price}</p>
            </div>
        </div>
        <div style={{display:"flex", flexDirection:"column" ,width: "20%" ,padding:"20px"}}>
            <div >

                <button onClick={()=>{
                    if(qty>1)
                    setQty(pre=>pre-1)
                }}>-</button>
                <button>{qty}</button>
                <button onClick={()=>{
                   setQty(pre=>pre+1)
                }}>+</button>

            </div>
            <div style={{ marginTop:"100px"}}>
                <button style={{width:"100px",height:"30px",borderRadius:"5px",backgroundColor:"lightyellow"}} onClick={()=>{
                    console.log(data);
                    
                    handleCart({...data},qty)
                }}>Add to Cart</button>
            </div>
        </div>
    </div>
}