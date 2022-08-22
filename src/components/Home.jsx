import { Link } from "react-router-dom"

export default function Home(){
    const getImageUrl = (image) =>{
        return new URL(`${image}`, import.meta.url).href
    }
    return(
        <div className="home">
            <h1>Home</h1>
            <div className="home--content">
                <img src={getImageUrl("../assets/ads/easy_currency_now.webp")} alt="A real ad for a PoE RMT site, advertising massive amounts of currency."/>
                <p>Easy Currency, Items, and other things to makes you an epic Path of Exile Player!</p>
                <img src={getImageUrl("../assets/ads/easy_items.webp")} alt="A real ad for a PoE RMT site, advertising extremely rare equipment."/>
            </div>
            <Link className="progress-link" to="/shop/all">Get Started!</Link>
        </div>
    )
}