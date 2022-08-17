import itemData from "../itemData"
import { CartContext } from "../cartContext"
import { useContext } from "react"
export default function Cart(){
    const {cart, removeItem} = useContext(CartContext)
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
    
    const cartElements = makeCartItems();
    return(
        <>
            <h1>Cart</h1>
            {cartElements}
            <h2>Grand Total: {total}</h2>
        </>
    )
}