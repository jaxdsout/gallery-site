
import { useState } from "react";
import PreviousBids from "./PreviousBids";
import axios from "axios";

const API_url = 'http://localhost:8000/inventory'

function Bid({ item }) {
  const [bid, setBid] = useState(item.current_price);
  const [prevBids, setPrevBids] = useState(false)
  const [lowBid, setLowBid] = useState(false)
  
  const makeBid = (e) => {
    e.preventDefault();
    console.log(item)
    const newBid = { 
      amount: bid,
      item: item.id,
      current_bid: item.current_price, 
    };
    if (newBid.amount > newBid.current_bid) {
      axios.post(`${API_url}/user-bids/`, newBid, {
        headers: {"Content-Type": "application/json"},
      }).then(() => {
        window.location.reload();
      }).catch(error => {
        console.log(error)
      });
    } else {
      setLowBid(!lowBid)
    }
  }

  const togglePrevBids = () => {
    setPrevBids(!prevBids);
  }
  
  return (
    <div>
      <form onSubmit={makeBid}>
        <input
          type="number"
          placeholder="Enter Bid Amount"
          value={bid}
          onChange={(event) => setBid(event.target.value)}
        />
        <button className="nav_button" type="submit">MAKE BID</button>
        {lowBid && 
          <div>
            <p> YOU NEED TO BID MORE </p>
          </div>}

      </form>
      <button className="nav_button" onClick={togglePrevBids}>PREVIOUS BIDS</button>
      {prevBids && 
        <PreviousBids item={item}/>
       }
       {prevBids && item.bids.length === 0 &&
         <div>
          <p> NO BIDS YET. BE THE FIRST. </p>
          </div>
       }
    </div>
  );
}

export default Bid;