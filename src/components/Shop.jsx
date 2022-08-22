import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import itemData from "../itemData"

import ItemCard from "./ItemCard"

export default function Shop(){
    const {category} = useParams();
    const categoryItems = category === "all" ? itemData : itemData.filter(item => item.category === category);
    const itemElements = categoryItems.map(item => (
        <ItemCard key={item.id} item={item} />
    ))
    
    return(
        <div className="shop">
            <h1>Shop</h1>
            <h2 className="shop--nav">
                <Link to="/shop/currency">Currency</Link>
                <Link to="/shop/unique">Uniques</Link>
                <Link to="/shop/scarab">Scarabs</Link>
                <Link to="/shop/carry">Carries</Link>
            </h2>
            <div className="shop--item-container">
                {itemElements}
            </div>
            <Link className="progress-link" to="/cart">Proceed to Checkout</Link>
        </div>
    )
}