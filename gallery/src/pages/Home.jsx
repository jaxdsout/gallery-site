import "./pages.css"
import { Link } from "react-router-dom"

function Home ({ items, events }) {
    const item = items[0]

    const event = events[0]

    return (
        <div className="front_container">
            <div>
                <h6> FEATURED COLLECTION </h6>
                <div className="front_preview">
                {item && (
                    <Link to={"/items/featured/"}>
                    <img src={item.image} alt={item.title} /></Link>
                )}  
                </div>          
            </div>
            <div>
                <h6> UPCOMING EVENTS </h6>
                <div className="front_preview">
                {event && (
                    <Link to={"/events/"}>
                    <img src={event.poster} alt={event.title} /></Link>
                )}  
                </div>          
            </div>
        </div>
    )
}

export default Home