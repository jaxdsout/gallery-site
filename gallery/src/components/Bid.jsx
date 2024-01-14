function Bid({ item, handleBid, bid }) {
  
    return (
      <div>
        <form onSubmit={(event) => handleBid(event, item, bid)}>
          <input
            type="number"
            placeholder="Enter Bid Amount"
            value={bid}
          />
          <button type="submit">MAKE BID</button>
        </form>
      </div>
    );
}

export default Bid