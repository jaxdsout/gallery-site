import "../styles/home.css"
import { Link } from "react-router-dom"


function Home ({ items, events }) {
    const featured_artist = items[0].creator_name
    console.log(featured_artist, "featured artist")
    const keyword = 'blossom'

    const featured_set = items.filter(item => item.creator_name === featured_artist && item.description.includes(keyword))
    const featured_event = events[0]

    return (
        <div className="home_page">
            <div className="sub_banner">
                <div className="front_preview">
                    <h6 className="front_preview_h6"> FEATURED COLLECTION </h6>
                    {featured_set && (
                        <Link to={"/items/featured/"}>
                        <img className="preview_image" src={featured_set[0].image} alt={featured_set[0].title} /></Link>
                    )}  
                </div>          
                <div className="front_preview">
                    <h6 className="front_preview_h6"> UPCOMING EVENTS </h6>
                    {featured_event && (
                        <Link to={"/events/"}>
                        <img className="preview_image" src={featured_event.poster} alt={featured_event.title} /></Link>
                    )}  
                </div>          
            </div>
        </div>
    )
}

export default Home