import { useState } from "react";
import axios from "axios";

function Bid({ item }) {
  const [bid, setBid] = useState(item.current_price);
  const [lowBid, setLowBid] = useState(false);
  const minBid = Math.ceil(item.current_price * 1.05);

  const handleInputClick = (e) => {
    e.target.select();
  };

  const makeBid = (e) => {
    e.preventDefault();
    const newBid = {
      amount: bid,
      item: item.id,
      current_bid: item.current_price,
    };
    if (newBid.amount >= minBid) {
      axios
        .post(`${process.env.REACT_APP_API_URL}user-bids/`, newBid, {
          headers: { "Content-Type": "application/json" },
        })
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setLowBid(!lowBid);
    }
  };
  
  return (
    <div className="bid">
      {lowBid && (
        <div className="low_bid">
          <p className="bid_more">YOU NEED TO BID MORE. </p>
          <p className="bid_more">THE MININUM BID AMOUNT IS CURRENTLY <b>${minBid}</b></p>
        </div>
      )}
        <form onSubmit={makeBid}>
          <input
            type="number"
            value={bid}
            className="bid_input"
            onClick={handleInputClick}
            onChange={(event) => setBid(event.target.value)}
          />
          <button className="cbutton" type="submit">
            MAKE BID
          </button>
        </form>
    </div>
  );
}

export default Bid;
