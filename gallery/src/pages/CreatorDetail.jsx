import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Creator ({creators, items}) {
  const { id } = useParams()
  const creator = creators.find(creator => creator.id === parseInt(id))
  const creator_items = items.filter((item) => creator.id === item.creator_id)

  return (
    creator ? (
      <div className="creator_container">
        <div className="creator_header">
          <Link to={"/creators/all/"}><i className="angle double left icon back_button"></i></Link>
          <div className="creator_sect">
            <h3 className="creator_type">{creator.name}</h3>
            <div className="creator_details">
              <p>{creator.about}</p>
              <p><Link className="creator_website" to={creator.website}>{creator.role.toLowerCase()} website</Link></p>            
            </div>
          </div>
        
        </div>
        <h3 className="creator_type list"> LIST OF ITEMS: </h3>
        <div className="creator_items">
          {creator_items.map((item, index) => (
            <div key={index}>
              <Link to={`/items/${item.id}/`}>
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