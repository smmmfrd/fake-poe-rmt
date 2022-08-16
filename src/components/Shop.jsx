import ItemCard from "./ItemCard"

import itemData from "../itemData"

export default function Shop(){
    const itemElements = itemData.map(item => (
        <ItemCard key={item.id} item={item} />
    ))
    return(
        <>
            <h1>Shop</h1>
            {itemElements}
        </>
    )
}