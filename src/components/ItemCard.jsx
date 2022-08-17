import { useContext } from "react"
import { CartContext } from "../cartContext"

export default function ItemCard(props){
    const {id, name, price, description, img} = props.item
    const {cart, addItem} = useContext(CartContext)
    const numInCart = cart[id] !== undefined ? cart[id] : 0;

    const getImageUrl = (image) =>{
        return new URL(`${image}`, import.meta.url).href
    }

    return(
        <div>
            <h3><img src={getImageUrl(img)} height="75px" />{name}</h3>
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