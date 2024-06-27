function PreviousBids ({ item }) {
    const bids = item.bids;
    return (
        <div className="previous_bids">
            {item.bids.length === 0 ? (
                <div className='no_bids'>                
                    <p>NO BIDS YET. BE THE FIRST.</p>
                </div>
            ) : (
                bids.map((bid, index) => (
                    <div key={index}>
                        <hr />
                        <p>Timestamp: {bid.time}</p>
                        <p>Amount: ${bid.amount}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default PreviousBids