function Item ({ item, onItemClick }) {
    
    const handleClick = () => {
      onItemClick(item);
    };
  
    return (
      item.image ? (
        <div>
          <img
            src={item.image} 
            alt={item.title}
            style={{ width: '300px' }}
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