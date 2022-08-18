import itemData from "../itemData"
import { CartContext } from "../cartContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export default function Cart(){
    const {cart, removeItem} = useContext(CartContext)
    const navigate = useNavigate()
    var total = 0;

    const getImageUrl = (image) =>{
        return new URL(`${image}`, import.meta.url).href
    }

    function makeCartItems(){
        var arr = [];
        let keys = [];

        for(var key in cart){
            keys.push(key);
        }

        for(let i=0; i < keys.length; i++){
            let key = keys[i];
            const {id, name, price, img} = itemData.find(item => item.id === key);

            const amount = price * cart[key];
            total += amount;

            arr.push(
                <div className="cart--item" key={id}>
                    <div className="cart--item-container">
                        <div className="cart--item-img"><img src={getImageUrl(img)} height="50px" /></div>
                        <div className="cart--item-name">{name}</div>
                        <div className="cart--item-price">
                            <p>Amount: {cart[key]} Cost:{price}</p>
                            <button onClick={() => removeItem(id)}>Remove Item</button>
                        </div>
                        <div className="cart--item-total">Total:{amount}</div>
                    </div>
                    {i != keys.length - 1 && <hr />}
                </div>
            );
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
            <div className="cart--container">
                {cartElements}
            </div>
            <h2>Grand Total: {total}</h2>
            <button onClick={handleCheckout}>Checkout</button>
        </>
    )
}