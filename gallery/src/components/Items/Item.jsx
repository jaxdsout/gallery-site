import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Item () {
  const { id } = useParams()
  const [item, setItem] = useState(null);
  const [bidAmount, setBidAmount] = useState(null);

  const API_url = 'http://localhost:8000/inventory/'

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await axios.get(`${API_url}items/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching item details:", error);
      }
    };
  
    fetchItemDetails();
  }, [id]);

  const handleBid = async () => {
    console.log (id, item, bidAmount)
    try {
      const response = await axios.post(`${API_url}/bids/`, {
        item_id: id.id,
        amount: bidAmount
      });
      setBidAmount(response.data);
    } catch (error) {
      console.error("Error submitting bid:", error);
    }
  }

    return (
      item ? (
        <div>
          <img style={{ width: '300px' }} src={item.image} alt={item.title}/>
          <br></br>
          <h3>CURRENT PRICE: <b>$ {item.current_price}</b></h3>
          <input
          type="number"
          placeholder="Enter Bid Amount"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
        />
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