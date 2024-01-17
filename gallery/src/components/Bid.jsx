
import { useState } from "react";
import PreviousBids from "../pages/PreviousBids";

const API_url = 'http://localhost:8000/inventory'

function Bid({ item }) {
  const [bid, setBid] = useState(item.current_price);
  const [prevBids, setPrevBids] = useState(false)
  
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
        window.history.pushState({}, document.title, window.location.href)
      })
  } else {
    // HANDLE ERROR FOR NOT BIDDING ENOUGH
  }
}

const togglePrevBids = () => {
  setPrevBids(!prevBids)
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
        <button onClick={togglePrevBids}>PREVIOUS BIDS</button>
        {prevBids && <PreviousBids item={item}/>}
      </div>
    );
}

export default Bid