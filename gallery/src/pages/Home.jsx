import { Link } from "react-router-dom"

function Home ({ items, events, featured_artist, keyword }) {
    const featured_set = items.filter(item => item.creator_name === featured_artist && item.description.includes(keyword))
    const featured_event = events[0]

    return (
        <div>
            <img className="mainbanner" src="https://warehouse-bkt-0810.s3.amazonaws.com/header_copy.png" alt="banner" />
            <div className="subbanner">
                <div className="home_page">
                    <div className="home_tile">
                        <h6 className="tile_h6"> FEATURED COLLECTION </h6>
                        {featured_set && (
                            <Link to={"/items/featured/"}>
                            <img className="tile_image" src="https://warehouse-bkt-0810.s3.amazonaws.com/rhodes_aerospirit.png" alt={featured_set.title} /></Link>
                        )}  
                    </div>          
                    <div className="home_tile">
                        <h6 className="tile_h6"> UPCOMING EVENTS </h6>
                        {featured_event && (
                            <Link to={"/events/"}>
                            <img className="tile_image" src={featured_event.poster} alt={featured_event.title} /></Link>
                        )}  
                    </div>    
                </div>      
            </div>
        </div>
    )
}

export default Home