import React, {useState} from "react"
const CartContext = React.createContext()

function CartContextProvider(props){
    const [cart, setCart] = useState({})

    function addItem(id){
        setCart(prevCart => ({
                ...prevCart,
                [id]: (id in cart) ? prevCart[id] + 1 : 1}
            ))
    }
    
    return (
        <CartContext.Provider value={{cart, addItem}}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContextProvider, CartContext}