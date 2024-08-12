import { Link } from "react-router-dom"

function FeaturedItems({ items, featured_artist, keyword }) {

    const featured_set = items.filter(item => item.creator_name === featured_artist && item.description.includes(keyword))

    return(
        <div className="featured">
            <div className="featured_header">
                <Link to={"/"}><i className="angle double left icon back_button"></i></Link>
                <h3 className="logo futur">FEATURED SET</h3>
            </div>
            <h3 className="featured_title"> {keyword} </h3>
            <div className="featured_specs">
                <p>by {featured_artist}</p>
                <p> a little blurb about the featured text</p>
                <p className="set_header"> browse the full collection: </p>
            </div>
            <div className="featured_set">
                {featured_set.map(item => (
                    <Link to={`/items/${item.id}/`}>
                        <img className="item_image featured_image" key={item.id} src={item.image} alt={item.title}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FeaturedItems