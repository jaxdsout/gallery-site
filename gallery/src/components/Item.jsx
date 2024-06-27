import { Fragment } from "react";

function Item ({ item, onItemClick }) {
    
    const handleClick = () => {
      onItemClick(item);
    };
  
    return (
      item.image ? (
        <div className='item'>
          <img
            className='item_image'
            src={item.image} 
            alt={item.title}
            onClick={handleClick}
          />
          <div className='item_snippet'>
            <p className='item_title'>
              {item.title.length > 50
                ? item.title.substring(0, 40) + '...'
                : item.title}
              <span className="current_price">${item.current_price}</span>
            </p> 
          </div> 
        </div>
             ) : null
    );
}

export default Item