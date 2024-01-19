import Item from "../components/Item";
import SearchBar from "../components/SearchBar";
import "./pages.css"
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_url = 'http://localhost:8000/inventory'


function AllItems({items, onItemClick }) {
  const [results, setResults] = useState([]);
  const [searchString, setSearchString] = useState('');
  const navigate = useNavigate();

  function handleSearch (event) {
    setSearchString(event.target.value)
  }

  function handleSubmit (event) { 
    if (event.key === 'Enter' || event.type === 'click') {
      searchItems(searchString)
    }
  }

  const searchItems = useCallback((searchString) => {
  const userSearch = encodeURIComponent(searchString)
  const url = `${API_url}/items/?search=${userSearch}`;
  axios.get(url)
      .then((res) => {
      setResults(res.data.results)
      navigate(`/items/search/${userSearch.toLowerCase()}`);
      })
      .catch((error) => {
      console.error(error)
      })
  }, [navigate])

    return (
      <div>
        <SearchBar 
          items={items}
          searchString={searchString} 
          handleSearch={handleSearch}
          handleSubmit={handleSubmit}
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