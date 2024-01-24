
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
    <div className="bid_component">
      <div className="bid_form">
        <form onSubmit={makeBid}>
          <input
            type="number"
            value={bid}
            className="bid_input"
            onChange={(event) => setBid(event.target.value)}
          />
          <button className="nav_button make_bid" type="submit">MAKE BID</button>
        </form>
        {lowBid && 
        <p> YOU NEED TO BID MORE </p>
      }
      </div>
      <div className="bid_responses">
        <button className="nav_button" onClick={togglePrevBids}>PREVIOUS BIDS</button>
        {prevBids && item.bids.length === 0 &&
          <p> NO BIDS YET. BE THE FIRST. </p>
        }
        {prevBids && 
          <PreviousBids item={item}/>
        }
      </div>
    </div>
  )
}

export default Bid;