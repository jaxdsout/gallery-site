
function Item ({ item, onItemClick }) {
    
    const handleClick = () => {
      onItemClick(item);
    };
  
    return (
      item.image ? (
        <div className='flex flex-col items-center mb-5'>
          <img
            className='tile w-full h-full max-w-[20rem] max-h-[20rem] object-cover rounded-lg drop-shadow-md fancy-hover'
            src={item.image} 
            alt={item.title}
            onClick={handleClick}
          />
          <div className='flex flex-row items-baseline mt-1 justify-center'>
            <p className='text-sm'>
              {item.title.length > 50
                ? item.title.substring(0, 40) + '...'
                : item.title}
              <span className="font-bold text-white ml-4">${item.current_price}</span>
            </p> 
          </div> 
        </div>
      ) : null
    );
}

export default Item