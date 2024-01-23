import { useParams, Link } from "react-router-dom";
import Bid from "../components/Bid";
import "./pages.css"


function ItemDetail ({items}) {
  const { id } = useParams()
  const item = items.find(item => item.id === parseInt(id))
  
    return (
      item ? (
        <div className="item_detail">
          <div>
            <Link to={"/items/all/"}><button className="nav_button">BACK</button></Link>
          </div>
          <img className="item_detail_image" src={item.image} alt={item.title}/>
          <div>
            <h3>CURRENT PRICE: <b>$ {item.current_price}</b></h3>
            <Bid item={item}/>
            <div>
              <h4>"{item.title}"</h4>
              <h6><Link to={`/creators/${item.creator_id}`}>{item.creator_name}</Link></h6>
              <ul>
                <li>{item.creation_date}</li>
                <li>{item.description}</li>
                <li>{item.dimensions}</li>
                <li>{item.materials_used}</li>
              </ul>
            </div>
          </div>
        </div>
      ) : null
    );
}

export default ItemDetail