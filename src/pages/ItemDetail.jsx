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
        <>
          <div className="flex flex-col md:flex-row items-center md:items-end justify-center">
            <div className="flex flex-col pr-0 md:pr-4 items-center md:items-start">
              <Link to={"/items/all/"} className="mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-10 hover:stroke-[#464646]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
              </Link>
              <img className="drop-shadow-md rounded-xl max-w-[30rem] max-h-[30rem]" src={item.image} alt={item.title}/>
            </div>
            <div className="flex flex-col items-center md:items-start max-w-[800px] bg-[#9f9f9f] rounded-xl p-6 mt-6 md:mt-0 border-2 border-[#a4a4a4] drop-shadow-md">
              <div className="flex flex-col items-start justify-start">
                <h3 className="text-white text-4xl italic -mb-5 select-none">{item.title}</h3>
                <h3><Link className="uppercase text-2xl font-extrabold text-[#6c6c6c] hover:text-[#f5f5f5]" to={`/creators/${item.creator_id}`}>{item.creator_name}</Link></h3>
                <p className="text-white text-sm mt-2 select-none">{item.description}</p>
                <ul className="text-white uppercase text-xs indent-4 mt-4 select-none">
                  <li className="pb-0.5">{item.creation_period}</li>
                  <li className="pb-0.5">{item.dimensions}</li>
                  <li className="pb-0.5">{item.materials_used}</li>
                </ul>
              </div>
              {daysLeft !== null && (
                <div className="bg-[#464646] rounded-lg p-4 mt-6">
                  <div className="flex flex-col items-center mb-4 select-none">
                  {daysLeft < 0 ? (
                    <h3 className="uppercase font-bold text-red-700 text-xl">
                      Sold Price: <span className="text-[#6c6c6c]">${item.current_price} USD</span>
                    </h3>
                  ) : (
                    <h3 className="uppercase font-bold text-white text-xl">
                      Current Price: <span className="text-[#6c6c6c]">${item.current_price} USD</span>
                    </h3>
                  )}
                  </div>
              
                  <Bid item={item} daysLeft={daysLeft} />

                  <div className="flex flex-row items-start p-3 mb-4 bg-[#1b1b1b] rounded-md text-white border-2 border-[#242424] select-none">
                    <i className="hourglass text-white half icon !mr-2"></i>
                    {daysLeft < 0 ? (
                      <p>AUCTION ENDED {-daysLeft} DAYS AGO </p>
                    ) : (
                      <p> ONLY {daysLeft} DAYS REMAINING UNTIL AUCTION ENDS </p>
                    )}
                  </div>

                  <button className="w-full rounded-md bg-[#1b1b1b] text-white pl-6 pr-6 pt-2 pb-2 tracking-widest text-sm font-semibold border-2 border-[#242424] hover:bg-[#848484] g-button" onClick={handlePrevBid}>
                    PREVIOUS BIDS
                  </button>
                </div>
              )}
            </div>
          </div>   
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
        </>
      ) : null
    );
}

export default ItemDetail
