import Item from "../components/Item";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import { Fragment } from "react";
import '../styles/item.css'

function AllItems({ items }) {
  const navigate = useNavigate()
  const [results, setResults] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [category, setCategory] = useState('')
  const [emptyResults, setEmptyResults] = useState(false);

  function handleSearch (event) {
    setSearchString(event.target.value)
  }

  function handleSubmit (event) { 
    if (event.key === 'Enter' || event.type === 'click') {
      if (searchString.length > 0) {
        searchItems(searchString)
      }
    }
  }

  function handleCategory (userChoice) {
    setCategory(userChoice);
  }

  function handleItemClick(item) {
    navigate(`/items/${item.id}/`)
  }

  const displayEmptyResults = () => {
    setEmptyResults(true)
  }

  const searchItems = useCallback((searchString) => {
    const userSearch = encodeURIComponent(searchString)
    const url = `${process.env.REACT_APP_API_URL}/items/?search=${userSearch}&category=${category}`;
    axios.get(url)
      .then((res) => {
        if (res.data.length === 0) {
          displayEmptyResults();
        }
        setResults(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [category])

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
        {emptyResults && <p>No results found for "<span className="search_string">{searchString}</span>" in <span className="search_string">{category}</span>. Showing all results instead.</p>}
      </div>
      </Fragment>
      <div className="items_container">
        {results.length > 0 ? (
          results.map((result, index) => (
            <Item key={index} item={result} onItemClick={handleItemClick} />
          ))
        ) : (
          items.map((item, index) => (
            <Item key={index} item={item} onItemClick={handleItemClick} />
          ))
        )}
      </div>
    </div>
    )
  }
  
  export default AllItems;