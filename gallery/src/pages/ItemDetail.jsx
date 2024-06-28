import { useParams, Link } from "react-router-dom";
import Bid from "../components/Bid";
import { useState } from "react";
import PreviousBids from "../components/BidPrevious";


function ItemDetail ({items}) {
  const { id } = useParams()
  const item = items.find(item => item.id === parseInt(id))
  const [prevBids, setPrevBids] = useState(false);

  const togglePrevBids = () => {
    setPrevBids(!prevBids);
  };

    return (
      item ? (
        <div className="detail_wrapper">
          <div className="back_all">
            <Link to={"/items/all/"}><button className="cbutton">BACK TO ALL</button></Link>
          </div>
          <div className="detail_middle">
            <div>
              <img className="detail_image" src={item.image} alt={item.title}/>
            </div>
            <h3 className="detail_title">"{item.title}"</h3>
            <h3><Link className="detail_creator_name" to={`/creators/${item.creator_id}`}>{item.creator_name}</Link></h3>
            <p>{item.description}</p>
            <ul className="detail_descriptions">
              <li>{item.creation_period}</li>
              <li>{item.dimensions}</li>
              <li>{item.materials_used}</li>
            </ul>
            <h3 className="detail_current_price">CURRENT PRICE: <span className="dollas">$ {item.current_price}</span></h3>
            <Bid item={item}/>
          </div>
          <div className="previous_wrapper">
            <button className="cbutton prev_button" onClick={togglePrevBids}>
              PREVIOUS BIDS
            </button>
            {prevBids && 
              <PreviousBids item={item}/>
            }
          </div>
        </div>
      ) : null
    );
}

export default ItemDetail
