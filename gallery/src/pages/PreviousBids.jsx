

function PreviousBids ({ item }) {
    const bids = item.bids;
    console.log(bids)
    return (
        <div>
            {bids.map((bid, index) => (
                <ul key={index}>
                    <li>Amount: {bid.amount}</li>
                    <li>bid date: </li>
                </ul>
            ))}
        </div>
    )
}

export default PreviousBids