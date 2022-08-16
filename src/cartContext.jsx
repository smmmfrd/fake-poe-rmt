import React, {useState} from "react"
const CartContext = React.createContext()

function CartContextProvider(props){
    const [cart, setCart] = useState({})

    function addItem(id){
        console.log(id);
    }

    return (
        <CartContext.Provider value={{cart, addItem}}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContextProvider, CartContext}