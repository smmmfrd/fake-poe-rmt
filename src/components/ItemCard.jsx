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
        <div className="shop--item">
            <div className="shop--item-header">
                <img src={getImageUrl(img)} height="50px" />
                <div className="shop--item-name">{name}</div>
                <strong>${price} </strong>
                <div className="shop--item-price">
                    <button onClick={() => addItem(id)}>Add to Cart</button>
                    {numInCart > 0 && <p> In cart: {numInCart}</p>}
                </div>
            </div>
            <hr />

            <p>{description}</p>
        </div>
    )
}