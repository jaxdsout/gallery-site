import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Creator () {
  const { id } = useParams()
  const [creator, setCreator] = useState(null);
  const API_url = 'http://localhost:8000/inventory/'

  console.log(id)

  useEffect(() => {
    const fetchCreatorDetails = async () => {
      try {
        const response = await fetch(`${API_url}creators/${id}`);
        const data = await response.json();
        setCreator(data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchCreatorDetails();
  }, [id]);

  return (
    creator ? (
      <div>
          <ul>
              <li>{creator.name}</li>
              <li>{creator.role}</li>
              <li>{creator.about}</li>
          </ul>

          <p>{creator.items}</p>
          <h4>LIST OF ITEMS:</h4>
          {creator.items.map((item, index) => (
            <div>
              <img style={{ width: '300px' }} src={item.image} alt={item.title}/>
              <br></br>
              <a href={`/items/${item.id}`}>{item.title}</a>
            </div>
          ))}
      </div>
    ) : null
  );
}

export default Creator