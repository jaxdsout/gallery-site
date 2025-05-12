import { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import axios from "axios";

function Bid({ item, daysLeft }) {
  const [bid, setBid] = useState(item.current_price);
  const minBid = Math.ceil(item.current_price * 1.05);
  const [showModal, setShowModal] = useState(false)

  const handleInputClick = (e) => {
    e.target.select();
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
      setShowModal(true);
    }
  };

  return (
    <>
      {daysLeft > 0 && (
        <div className="flex flex-row items-center p-1 justify-center mb-4 w-full relative font-semibold">
          <span className="absolute left-4">$</span>
          <input
            type="number"
            value={bid}
            className="mr-3 rounded-md indent-6 h-[3rem] w-full"
            onClick={handleInputClick}
            onChange={(event) => setBid(event.target.value)}
          />
          <i className="arrow alternate circle up icon text-[#00cf29] !text-3xl hover:text-[#0b8c0b] cursor-pointer" onClick={makeBid}></i>
        </div>
      )}
      {showModal && (
        <Modal open={showModal} onClose={handleCloseModal} className="!w-[280px]">
          <Modal.Header>Mininum Bid Notice</Modal.Header>
          <Modal.Content>
            <div className="text-black text-center font-base mt-3 mb-3">
              <p>YOU NEED TO BID MORE.</p>
              <p>
                THE MINIMUM BID IS CURRENTLY SET AT <b>${minBid} USD</b>
              </p>
            </div> 
          </Modal.Content>
          <Modal.Actions className="flex items-center flex-col">
            <Button onClick={handleCloseModal}>CLOSE</Button>
          </Modal.Actions>
        </Modal>
      )}
    </>
  );
}

export default Bid;

