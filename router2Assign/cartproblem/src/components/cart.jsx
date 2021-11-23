import { CartContext } from "../contexts/AppContext"
import { useContext } from "react";
import "../components/cart.css"

export function Cart() {
    let { cartItems ,price} = useContext(CartContext)
    console.log(cartItems);
    return <div>
        <h2>Invoice</h2>
        <div style={{margin:"auto"}}>
        <table style={{width:"500px",margin:"auto"}}>
            <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price(in Rs)</th>
                <th>Final Price</th>
            </tr>
            { cartItems.map((e) => <tr>
                <td>{e.product_name}</td>
                <td>{e.qty}</td>
                <td>{e.price}</td>
                <td>{e.price * e.qty}</td>
            </tr>)}
            <tr>
                <th colSpan="3">Total price</th>
                <th>{price}</th>
            </tr>
        </table>
        </div>
       
    </div>
}