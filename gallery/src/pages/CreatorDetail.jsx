import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/creator.css'

function Creator ({creators, items}) {
  const { id } = useParams()
  const creator = creators.find(creator => creator.id === parseInt(id))
  const creator_items = items.filter((item) => creator.id === item.creator_id)

  return (
    creator ? (
      <div className="creator_container">
          <h3 className="creator_header">{creator.role}.</h3>
          <div className="creator_details">
            <h5 className="creator_name">{creator.name}</h5>
            <p className="creator_about">{creator.about}</p>
            <p className="creator_website"><Link to={creator.website}>{creator.role.toLowerCase()} website</Link></p>
          </div>
          <h3 className="creator_header list"> LIST OF ITEMS: </h3>
          <div className="creator_items">
            {creator_items.map((item, index) => (
              <div key={index}>
                <Link to={`/items/${item.id}`}>
                <img
                  src={item.image} 
                  alt={item.title}
                  style={{ width: '300px' }}
                  className="creator_item_image"
                />
                </Link>
              </div>
          ))}
          </div>
         
      </div>
    ) : null
  );
}

export default Creator