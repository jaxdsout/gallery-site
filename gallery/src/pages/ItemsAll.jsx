import Item from "../components/Item";
import SearchBar from "../components/SearchBar";
import { Fragment } from "react";
import '../styles/item.css'

function AllItems({ items, results, onItemClick, searchString, handleSearch, handleSubmit, handleCategory }) {
  return (
    <div className="items_all">
      <Fragment>
        <SearchBar 
        results={results}
        searchString={searchString} 
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        handleCategory={handleCategory}
      />
      </Fragment>
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