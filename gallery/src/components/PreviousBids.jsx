

function PreviousBids ({ item }) {
    const bids = item.bids;
    console.log(bids)
    return (
        <div className="previous_bids">
            {bids.map((bid, index) => (
                <div className="nav_items" key={index}>
                    <p>Amount: {bid.amount}</p>
                    <p>bid date: </p>
                </div>
            ))}
        </div>
    )
}

export default PreviousBids