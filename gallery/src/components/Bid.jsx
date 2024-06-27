import { useState } from "react";
import PreviousBids from "./BidPrevious";
import axios from "axios";

function Bid({ item }) {
  const [bid, setBid] = useState(item.current_price);
  const [prevBids, setPrevBids] = useState(false);
  const [lowBid, setLowBid] = useState(false);

  const togglePrevBids = () => {
    setPrevBids(!prevBids);
  };

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
    <div className="bid_component">
      <div className="bid_form">
        <form onSubmit={makeBid}>
          <input
            type="number"
            value={bid}
            className="bid_input"
            onClick={handleInputClick}
            onChange={(event) => setBid(event.target.value)}
          />
          <button className="nav_button make_bid" type="submit">
            MAKE BID
          </button>
        </form>
        {lowBid && (
          <p className="bid_more">YOU NEED TO BID MORE. <br></br>THE MINIMUM INCREMENT IS $50. </p>
      )}
      </div>
      <div>
        <button className="nav_button prev_button" onClick={togglePrevBids}>
          PREVIOUS BIDS
        </button>
        {prevBids && 
          <PreviousBids item={item}/>
        }
      </div>
     
    </div>
  );
}

export default Bid;
