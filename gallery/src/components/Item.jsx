import './components.css'

function Item ({ item, onItemClick }) {
    
    const handleClick = () => {
      onItemClick(item);
    };
  
    return (
      item.image ? (
        <div className="item_container">
          <img
          className='item_image'
          src={item.image} 
          alt={item.title}
          onClick={handleClick}
          />
          <div className='item_snippet'>
            <p className='item_title'>
              {item.title.length > 50
                ? item.title.substring(0, 46) + '...'
                : item.title}
            </p> 
            <p className="current_price">${item.current_price}</p>
          </div> 
        </div>
      ) : null
    );
}

export default Item