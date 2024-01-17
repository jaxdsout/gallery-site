import Item from "../components/Item";
import SearchBar from "../components/SearchBar";
import "./pages.css"

function AllItems({items, onItemClick}) {
    return (
      <div>
        <SearchBar items={items}/>
        <div className="items_container">
          {items.map((item, index) => (
            <Item key={index} item={item} onItemClick={onItemClick}/>
          ))}
        </div>
      </div>
    )
  }
  
  export default AllItems;