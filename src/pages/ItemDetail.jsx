import { useParams, Link } from "react-router-dom";
import Bid from "../components/Bid";
import { useState, useEffect } from "react";
import { Modal, Button, Popup, ButtonOr, ButtonGroup } from "semantic-ui-react";
import { parseISO } from "date-fns";
import { insert_cart } from "../store/actions";
import { connect } from "react-redux";


function ItemDetail ({items, insert_cart}) {
  const { id } = useParams()
  const item = items.find(item => item.id === parseInt(id))
  const [showModal, setShowModal] = useState(false)
  const [daysLeft, setDaysLeft] = useState(null)
  const [tab, setTab] = useState('bid');

  const buyNow = (item) => {
    insert_cart(item)
  }

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

  const formatDate = (datetimeStr) => {
    const dateObj = new Date(datetimeStr);
    return dateObj.toLocaleString('default', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    }).replace(',', '').replace(',', '');
};

  useEffect(() => {
    if (item) {
      handleCountdown()
    }
  }, [item])

  if (item) return (
    <>
      <div className="flex flex-col md:flex-row items-center md:items-end justify-center mb-16 mt-12">
        <div className="flex flex-col pr-0 md:pr-4 items-center md:items-start">
          <Link to={"/items/all/"} className="mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="black" className="size-10 hover:stroke-[#464646]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
          </Link>
          <img className="drop-shadow-md rounded-xl w-[24rem] h-[24rem] md:w-[30rem] md:h-[30rem]" src={item.image} alt={item.title}/>
        </div>
        <div className="flex flex-col items-start bg-[#0d0d0d] rounded-xl p-6 mt-6 md:mt-0 drop-shadow-md w-[24rem] h-[30rem] md:w-[30rem] md:h-[30rem]">
          <div className="flex flex-row items-start justify-between w-full">
            <h1 className="text-white text-4xl italic select-none">{item.title}</h1>
            <p className="uppercase font-bold text-white text-2xl">
              ${item.current_price} <span className="text-xs">USD</span>
            </p>
          </div>
          <div className="flex flex-row items-start justify-between w-full">
            <Link to={`/creators/${item.creator_id}`}>
              <h1 className="text-[#6c6c6c] hover:text-[#f5f5f5] uppercase text-xl font-extrabold">{item.creator_name}</h1>
            </Link>
            <Popup
              positionFixed={true}
              position={"bottom right"}
              content={item.description}
              trigger={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="size-6 cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg>
              }
            >
            </Popup>
          </div>
          <div className="flex flex-row items-start justify-between mt-4 w-full">
            <ul className="text-white uppercase text-xs indent-4 select-none">
              <li className="pb-0.5">{item.creation_period}</li>
              <li className="pb-0.5">{item.dimensions}</li>
              <li className="pb-0.5">{item.materials_used}</li>
            </ul>
            <div className="flex flex-row border-[0.18rem] border-white rounded-xl">
              <button 
                className="py-2 px-6 rounded-tl-lg rounded-bl-lg hover:!bg-[#626262] font-semibold" 
                onClick={() => setTab('bid')}
                style={{ background: tab === 'bid' ? 'white' : '#0c0c0c', color: tab === 'bid' ? 'black' : 'white'}}              
              >
                  BID
              </button>
              <button 
                className="py-2 px-6 rounded-tr-lg rounded-br-lg hover:!bg-[#626262] font-semibold" 
                onClick={() => setTab('buy')}
                style={{ background: tab === 'buy' ? 'white' : '#0c0c0c', color: tab === 'buy' ? 'black' : 'white'}}
              >
                BUY

              </button>
            </div>
          </div>
          <div className="bg-[#464646] rounded-lg p-4 mt-6 w-full">
              <div className="flex flex-col items-center w-full">
                <p className="p-3 mb-4 bg-[#1b1b1b] rounded-md text-white border-2 border-[#242424] select-none w-full text-center"> 
                  <i className="hourglass text-white half icon !mr-2"></i> 
                  {daysLeft < 0 ? `AUCTION ENDED ${daysLeft} DAYS AGO` : `${daysLeft} DAYS UNTIL AUCTION ENDS`} 
                </p>
                {tab === 'bid' && (
                  <>
                    <Bid item={item} daysLeft={daysLeft} />
                    <button className="w-full rounded-md bg-[#1b1b1b] text-white py-2 px-6 tracking-widest text-sm font-semibold border-2 border-[#242424] hover:bg-[#848484] g-button h-[3rem]" onClick={handlePrevBid}>
                      PREVIOUS BIDS
                    </button>
                  </>
                )}
                {tab === 'buy' && (
                    <button onClick={() => buyNow(item)} className="p-3 mb-4 bg-[#00cf29] rounded-md text-white border-2 border-[#0b8c0b] select-none w-full text-center hover:bg-[#0b8c0b] font-bold">
                      ADD TO CART
                    </button>
                )}
              </div>
          </div>
        </div>
      </div>
      {/* {daysLeft < 0 && (
        <h3 className="uppercase font-bold text-red-700 text-xl">
          Sold Price: <span className="text-[#6c6c6c]">${item.current_price} USD</span>
        </h3>
      )} */}
      <Modal open={showModal} onClose={handleCloseModal} className="!w-[280px]">
        <Modal.Header>Previous Bids</Modal.Header>
        <Modal.Content>
          {item.bids.length === 0 ? (
            <p className="text-center">No bids have been submitted for this item yet.</p>
            ) : (
            item.bids.map((bid, index) => (
              <div className="bg-[#4c4c4c] rounded-md p-3 text-white mb-3" key={index}>
                <p className=""><b>Timestamp:</b> {formatDate(bid.time)}</p>
                <p className=""><b>Amount:</b> ${bid.amount}</p>
                <hr />
              </div>
            ))
          )}
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={handleCloseModal}>CLOSE</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
}

const mapStateToProps = state => ({
  cartVisible: state.cartVisible,
  cart: state.cart
})

export default connect(mapStateToProps, { insert_cart })(ItemDetail);