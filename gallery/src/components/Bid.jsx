import { useState } from "react";
import axios from "axios";

function Bid({ item }) {
  const [bid, setBid] = useState(item.current_price);
  const [lowBid, setLowBid] = useState(false);

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
    if (newBid.amount >= newBid.current_bid + 50) {
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
        <p className="bid_more">YOU NEED TO BID MORE. THE MINIMUM INCREMENT IS $50. </p>
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
