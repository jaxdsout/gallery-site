import "./pages.css"

function Home ({ items }) {
    const item = items[0]

    return (
        <div className="front_container">
            <div>
                <h6> FEATURED COLLECTION </h6>
                <div className="front_preview">
                {item && (
                    <a href="/items/featured/">
                    <img src={item.image} alt={item.title} /></a>
                )}  
                </div>          
            </div>
            <div>
                <h6> UPCOMING EVENTS </h6>
                <div className="front_preview">
                {item && (
                    <img src="https://i.imgur.com/bLYBl8q.jpg" alt="upcoming-event" />
                )}  
                </div>          
            </div>
        </div>
    )
}

export default Home