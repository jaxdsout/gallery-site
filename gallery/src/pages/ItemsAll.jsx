import Item from "../components/Item";
import SearchBar from "../components/SearchBar";
import "./pages.css"

function AllItems({items, results, onItemClick, searchString, handleSearch, handleSubmit }) {

    return (
      <div className="items_all">
        <SearchBar 
          searchString={searchString} 
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
          results={results}
        />
         <div className="items_container">
          {results.length > 0 ? (
            results.map((result, index) => (
              <Item key={index} item={result} onItemClick={onItemClick} />
            ))
          ) : (
            items.map((item, index) => (
              <Item key={index} item={item} onItemClick={onItemClick} />
            ))
          )}
        </div>
      </div>
    )
  }
  
  export default AllItems;