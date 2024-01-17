import Item from "./Item";

function AllItems({items, onItemClick}) {
    return (
      <div>
        {items.map((item, index) => (
          <Item key={index} item={item} onItemClick={onItemClick}/>
        ))}
      </div>
    )
  }
  
  export default AllItems;