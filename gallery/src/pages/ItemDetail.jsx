import { useParams, Link } from "react-router-dom";
import Bid from "../components/Bid";
import '../styles/item.css'


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
              <h3 className="item_detail_title">"{item.title}"</h3>
              <h3 className="item_creator_name"><Link to={`/creators/${item.creator_id}`}>{item.creator_name}</Link></h3>
              <p>{item.description}</p>
              <ul className="item_descriptions">
                <li>{item.creation_period}</li>
                <li>{item.dimensions}</li>
                <li>{item.materials_used}</li>
              </ul>
              <div className="item_detail_right">
                <h3 className="current_price_item">CURRENT PRICE: <span className="dollas">$ {item.current_price}</span></h3>
                <Bid item={item}/>
              </div>
          </div>
        </div>
      ) : null
    );
}

export default ItemDetail
