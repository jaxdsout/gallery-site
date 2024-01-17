
import { useState } from "react";
const API_url = 'http://localhost:8000/inventory'

function Bid({ item }) {
  const [bid, setBid] = useState(item.current_price);
  
  const makeBid = (e) => {
    e.preventDefault();
    console.log(item)
    const newBid = { 
      amount: bid,
      item: item.id,
      current_bid: item.current_price, 
    };
    if (newBid.amount > newBid.current_bid) {
      fetch(`${API_url}/bids/`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newBid)
      }).then(() => {
        console.log("new bid added")
      })
  } else {
    console.log("not enough sheckels")
  }
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
          <button type="submit">MAKE BID</button>
        </form>
        <button>PREVIOUS BIDS</button>
      </div>
    );
}

export default Bid