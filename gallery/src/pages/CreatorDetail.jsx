import { useParams } from "react-router-dom";

function Creator ({creators, items}) {
  const { id } = useParams()
  const creator = creators.find(creator => creator.id === parseInt(id))

  const creator_items = items.filter((item) => creator.id === item.creator_id)

  console.log(creator_items)
  return (
    creator ? (
      <div>
          <ul>
              <li>{creator.name}</li>
              <li>{creator.role}</li>
              <li>{creator.about}</li>
          </ul>

          <ul>
            {creator_items.map((item, index) => (
              <li key={index}><a href={`/items/${item.id}`}>
                 {item.title}
              </a></li>
          ))}
          </ul>
      </div>
    ) : null
  );
}

export default Creator