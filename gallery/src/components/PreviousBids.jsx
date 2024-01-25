import './components.css'

function PreviousBids ({ item }) {
    const bids = item.bids;
    console.log(bids)
    return (
        <div>
            {bids.map((bid, index) => (
                <div className="previous_bids" key={index}>
                    <p>Timestamp: {bid.time} </p>
                    <p>Amount: ${bid.amount}</p>
                </div>
            ))}
        </div>
    )
}

export default PreviousBids