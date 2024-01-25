import './components.css'

function Item ({ item, onItemClick }) {
    
    const handleClick = () => {
      onItemClick(item);
    };
  
    return (
      item.image ? (
        <div className="item_image">
          <p className="current_price">${item.current_price}</p>
          <img
            src={item.image} 
            alt={item.title}
            onClick={handleClick}
          />
          <p className='title'>
              {item.title.length > 50
                ? item.title.substring(0, 46) + '...'
                : item.title}
          </p>
        </div>
      ) : null
    );
}

export default Item