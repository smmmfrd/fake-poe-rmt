import itemData from "../itemData"
import { CartContext } from "../cartContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export default function Cart(){
    const {cart, removeItem} = useContext(CartContext)
    const navigate = useNavigate()
    var total = 0;

    function makeCartItems(){
        var arr = [];
        for(var key in cart){
            const {id, name, price} = itemData.find(item => item.id === key);

            const amount = price * cart[key];
            total += amount;

            arr.push(<div key={id}>
                <p><strong>{name}</strong> Amount: {cart[key]} Cost:{price} Total:{amount}<button onClick={() => removeItem(id)}>Remove Item</button></p>
            </div>);
        }
        return arr;
    }

    function handleCheckout(){
        setTimeout(() =>{
            navigate("/checkout")
        }, 3000)
    }
    
    const cartElements = makeCartItems();
    return(
        <>
            <h1>Cart</h1>
            {cartElements}
            <h2>Grand Total: {total}</h2>
            <button onClick={handleCheckout}>Checkout</button>
        </>
    )
}