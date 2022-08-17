import { useContext } from "react"
import { CartContext } from "../cartContext"

export default function ItemCard(props){
    const {id, name, price, description} = props.item
    const {cart, addItem} = useContext(CartContext)
    const numInCart = cart[id] !== undefined ? cart[id] : 0;
    return(
        <div>
            <h3>{name}</h3>
            <p>
                <strong>${price} - </strong>
                {description}
            </p>
            {numInCart > 0 && <p> In cart: {numInCart}</p>}
            <button onClick={() => addItem(id)}>Add to Cart</button>
            <hr />
        </div>
    )
}