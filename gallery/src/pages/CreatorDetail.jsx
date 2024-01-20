import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Creator ({creators, items}) {
  const { id } = useParams()
  const creator = creators.find(creator => creator.id === parseInt(id))
  const creator_items = items.filter((item) => creator.id === item.creator_id)

  console.log(creators.items)
  return (
    creator ? (
      <div>
          <ul>
              <li>{creator.name}</li>
              <li>{creator.role}</li>
              <li>{creator.about}</li>
          </ul>
          <h3> LIST OF ITEMS: </h3>
          <ul>
            {creator_items.map((item, index) => (
              <li key={index}><Link to={`/items/${item.id}`}>
                <img
                  src={item.image} 
                  alt={item.title}
                  style={{ width: '300px' }}
                />
              </Link></li>
          ))}
          </ul>
      </div>
    ) : null
  );
}

export default Creator