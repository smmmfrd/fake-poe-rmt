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
    console.log(category)
    return(
        <>
            <h1>Shop</h1>
            <h2>
                <Link to="/shop/currency">Currency</Link>
                <Link to="/shop/unique">Uniques</Link>
                <Link to="/shop/scarab">Scarabs</Link>
                <Link to="/shop/carry">Carries</Link>
            </h2>
            {itemElements}
            <h2><Link to="/cart">Proceed to Checkout</Link></h2>
        </>
    )
}