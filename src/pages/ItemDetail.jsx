import { useParams, Link } from "react-router-dom";
import Bid from "../components/Bid";
import { useState, useEffect } from "react";
import { Modal, Button } from "semantic-ui-react";
import { parseISO } from "date-fns";


function ItemDetail ({items}) {
  const { id } = useParams()
  const item = items.find(item => item.id === parseInt(id))
  const [showModal, setShowModal] = useState(false)
  const [daysLeft, setDaysLeft] = useState(null)
  
  function handleCountdown () {
    const now = new Date();
    const listingEndDate = parseISO(item.listing_end);
    const countdown = listingEndDate - now;
    const daysLeft = Math.floor(countdown / (1000 * 60 * 60 * 24));
    setDaysLeft(daysLeft)
  }

  const handlePrevBid = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (item) {
      handleCountdown()
    }
  }, [item])

    return (
      item ? (
        <div className="detail_page">
          <div className="detail_left">
            <Link to={"/items/all/"}><i className="angle double left icon back_button"></i></Link>
            <img className="detail_image" src={item.image} alt={item.title}/>
          </div>
          <div className="detail_right">
            <div className="dright_header">
              <h3 className="detail_title">"{item.title}"</h3>
              <h3><Link className="detail_creator_name" to={`/creators/${item.creator_id}`}>{item.creator_name}</Link></h3>
              <p>{item.description}</p>
              <ul className="detail_descriptions">
                <li>{item.creation_period}</li>
                <li>{item.dimensions}</li>
                <li>{item.materials_used}</li>
              </ul>
            </div>
            {daysLeft !== null && (
              <>
                {daysLeft < 0 ? (
                  <h3 className="detail_current_price">
                    Sold Price: <span className="dollas">${item.current_price} USD</span>
                  </h3>
                ) : (
                  <h3 className="detail_current_price">
                    Current Price: <span className="dollas">${item.current_price} USD</span>
                  </h3>
                )}
                <Bid item={item} daysLeft={daysLeft} />
                <div className="time_container">
                  <i className="hourglass half icon"></i>
                  {daysLeft < 0 ? (
                    <p>AUCTION ENDED {-daysLeft} DAYS AGO </p>
                  ) : (
                    <p> ONLY {daysLeft} DAYS REMAINING UNTIL AUCTION ENDS </p>
                  )}
                </div>
              </>
            )}
            <button className="prev_bids" onClick={handlePrevBid}>
              PREVIOUS BIDS
            </button>
            <Modal open={showModal} onClose={handleCloseModal}>
              <Modal.Header>Previous Bids</Modal.Header>
              <Modal.Content>
                {item.bids.length === 0 ? (
                  <p className="nobids">No bids have been submitted for this item yet.</p>
                  ) : (
                  item.bids.map((bid, index) => (
                    <div key={index}>
                      <hr />
                      <p className="nobids">Timestamp: {bid.time}</p>
                      <p className="nobids">Amount: ${bid.amount}</p>
                    </div>
                  ))
                )}
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={handleCloseModal}>CLOSE</Button>
              </Modal.Actions>
            </Modal>
          </div>
        </div>
      ) : null
    );
}

export default ItemDetail
