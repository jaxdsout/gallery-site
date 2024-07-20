import { useParams, Link } from "react-router-dom";
import Bid from "../components/Bid";
import { useState } from "react";
import { Modal, Button } from "semantic-ui-react";


function ItemDetail ({items}) {
  const { id } = useParams()
  const item = items.find(item => item.id === parseInt(id))
  const [showModal, setShowModal] = useState(false);

  const handlePrevBid = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

    return (
      item ? (
        <div className="detail_wrapper">
          <div className="detail_left">
            <Link to={"/items/all/"}><button className="prev_button">BACK TO ALL</button></Link>
            <img className="detail_image" src={item.image} alt={item.title}/>
          </div>
          <div className="detail_right">
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
            <button className="prev_button" onClick={handlePrevBid}>
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
