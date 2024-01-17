import { useParams } from "react-router-dom";
import Bid from "../components/Bid";
import "./pages.css"


function Item ({items}) {
  const { id } = useParams()
  const item = items.find(item => item.id === parseInt(id))
  console.log(item.creator)
    return (
      item ? (
        <div className="item_detail">
          <img style={{ width: '300px' }} src={item.image} alt={item.title}/>
          <div>
            <h3>CURRENT PRICE: <b>$ {item.current_price}</b></h3>
            <Bid item={item}/>
            <ul>
              <h4>{item.title}</h4>
              <li>{item.creator.name}</li>
              <li>{item.creation_date}</li>
              <li>{item.description}</li>
              <li>{item.dimensions}</li>
              <li>{item.materials_used}</li>
            </ul>
          </div>
        </div>
      ) : null
    );
}

export default Item