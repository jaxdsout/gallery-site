import Item from "../components/Item";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { Fragment } from "react";
import '../styles/item.css'

function AllItems({ items, results, onItemClick, searchString, handleSearch, handleSubmit, handleCategory, emptyResults }) {

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
      <div className="empty_results">
        {emptyResults && <p>No results found for "<span className="search_string">{searchString}</span>." Showing all results instead.</p>}
      </div>
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