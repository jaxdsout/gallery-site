import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './pages.css'

function Creator ({creators, items}) {
  const { id } = useParams()
  const creator = creators.find(creator => creator.id === parseInt(id))
  const creator_items = items.filter((item) => creator.id === item.creator_id)

  console.log(creators.items)
  return (
    creator ? (
      <div>
          <h3 className="creator_header">{creator.role}</h3>
          <div className="creator_details">
            <h5 className="creator_name">{creator.name}</h5>
            <p>{creator.about}</p>
          </div>
          <h3 className="creator_header list"> LIST OF ITEMS: </h3>
          <div className="creator_items">
            {creator_items.map((item, index) => (
              <div key={index}><Link to={`/items/${item.id}`}>
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