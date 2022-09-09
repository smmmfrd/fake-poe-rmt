import itemData from "../itemData"
import { CartContext } from "../cartContext"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Cart(){
    const [finished, setFinished] = useState(false)
    const {cart, removeItem} = useContext(CartContext)
    const navigate = useNavigate()
    var total = 0;

    const getImageUrl = (image) =>{
        return new URL(`${image}`, import.meta.url).href
    }

    function handleCheckout(){
        setFinished(true);
        setTimeout(() =>{
            navigate("/checkout")
        }, 3000)
    }
    
    const cartElements = Object.keys(cart).map(cartItem => {
        const {id, name, price, img} = itemData.find(item => item.id === cartItem);
        var amount = cart[cartItem];
        var subTotal = amount * price;
        total += subTotal;
        return (
            <div className="cart--item" key={id}>
                <div className="cart--item-container">
                    <div className="cart--item-img"><img src={getImageUrl(img)} height="50px" /></div>
                    <div className="cart--item-name">{name}</div>
                    <div className="cart--item-price">
                        <p>Amount: {cart[cartItem]} Cost:{price}</p>
                        <button onClick={() => removeItem(id)} disabled={finished}>{finished ? "Processing..." : "Remove Item" }</button>
                    </div>
                    <div className="cart--item-total">Total:{amount}</div>
                </div>
                <hr />
            </div>
        )
    });
    return(
        <>
            <h1>Cart</h1>
            <div className="cart--container">
                {cartElements}
            </div>
            <div className="cart--total-container">
                <div className="cart--total-display">Grand Total: {total}</div>
                <button className="cart--checkout-button" onClick={handleCheckout}>{finished ? "Processing..." : "Checkout" }</button>
            </div>
        </>
    )
}