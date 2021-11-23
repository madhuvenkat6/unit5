import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider =  ({children}) =>{

    const [cartItems, setCartItems] = useState([])
    const [price,setPrice] = useState(null);

    const handleCart = (item,qty) =>{
        console.log(qty,item.price,item.price*qty);
        item.qty = qty
        //item.price = item.price * qty;
        setCartItems([...cartItems,item])
        setPrice((prev)=>prev+(qty*item.price))
    }

    return<CartContext.Provider value={{cartItems,handleCart,price}}>{children}</CartContext.Provider>
}