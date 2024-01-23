import "./pages.css"
import { Link } from "react-router-dom"

function Home ({ items, events }) {
    const item = items[0]

    const event = events[0]

    return (
        <div className="home_page">
            <div className="main_banner">
                <img className="banner" src={`https://i.imgur.com/DSW4yhX.png`} alt="banner" />
                {/* <h1 className="next_event">NEXT EVENT</h1> */}
            </div>
            <div className="sub_banner">
                <div className="front_preview">
                    <h6 className="logo"> FEATURED COLLECTION </h6>
                    {item && (
                        <Link to={"/items/featured/"}>
                        <img className="preview_image" src={item.image} alt={item.title} /></Link>
                    )}  
                </div>          
                <div className="front_preview">
                    <h6 className="logo"> UPCOMING EVENTS </h6>
                    {event && (
                        <Link to={"/events/"}>
                        <img className="preview_image" src={event.poster} alt={event.title} /></Link>
                    )}  
                </div>          
            </div>
        </div>
    )
}

export default Home