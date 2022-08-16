import { useContext } from "react"
import { CartContext } from "../cartContext"

export default function ItemCard(props){
    const {id, name, price, description} = props.item
    const {addItem} = useContext(CartContext)
    return(
        <div>
            <h3>{name}</h3>
            <p>
                <strong>${price} - </strong>
                {description}
                <button onClick={() => addItem(id)}>Add to Cart</button>
            </p>
            <hr />
        </div>
    )
}