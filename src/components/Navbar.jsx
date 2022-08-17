import { Link } from "react-router-dom"
import { CartContext } from "../cartContext"
import { useContext } from "react"

export default function Navbar(){
    const {numItems} = useContext(CartContext)
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart ({numItems()})</Link>
        </nav>
    )
}