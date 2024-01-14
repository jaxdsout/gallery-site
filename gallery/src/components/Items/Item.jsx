import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Item ({ handleBid }) {
  const { id } = useParams()
  const [item, setItem] = useState(null);
  const API_url = 'http://localhost:8000/inventory/'

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`${API_url}items/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };

    fetchItemDetails();
  }, [id]);

    return (
      item ? (
        <div>
          <img style={{ width: '300px' }} src={item.image} alt={item.title}/>
          <br></br>
          <h3>CURRENT PRICE: <b>$ {item.current_price}</b></h3>
          <button onClick={handleBid}>MAKE BID</button>
          <ul>
            <h4>{item.title}</h4>
            <li>{item.creator.name}</li>
            <li>{item.creation_date}</li>
            <li>{item.description}</li>
            <li>{item.dimensions}</li>
            <li>{item.materials_used}</li>
          </ul>
        </div>
      ) : null
    );
}

export default Item