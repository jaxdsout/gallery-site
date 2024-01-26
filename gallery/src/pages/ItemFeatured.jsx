import { Link } from "react-router-dom"
import '../styles/item.css'

function FeaturedItems({ items }) {
    const featured_artist = 'Berk Turhan'
    const keyword = ''

    const featured_set = items.filter(item => item.creator_name === featured_artist && item.description.includes(keyword))

    return(
        <div className="featured">
            <h3 className="logo">FEATURED SET.</h3>
            <p> a little blurb about the featured text</p>
            <div className="featured_set">
                {featured_set.map(item => (
                    <Link to={`/items/${item.id}`}>
                        <img className="featured_image" key={item.id} src={item.image} alt={item.title}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FeaturedItems