import Item from "../components/Item";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import { Fragment } from "react";

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
    const url = `${process.env.REACT_APP_API_URL}items/?search=${userSearch}&category=${category}`;
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

  const shuffle = (array) => {
    let newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const shuffledResults = results.length > 0 ? shuffle(results) : shuffle(items);

  return (
    <div className="art-page">
      <SearchBar 
        results={results}
        searchString={searchString} 
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        handleCategory={handleCategory}
      />
      {emptyResults && 
        <div className="empty_results">
          <p>No results found for "
            <span className="search_string">{searchString}</span>" in
            <span className="search_string">{category}</span>. Showing all results instead.
          </p>
        </div>
      }
      <div className="all_items">
      {shuffledResults ? (
        shuffledResults.map((item, index) => (
          <Item key={index} item={item} onItemClick={handleItemClick} />
        ))
      ) : (
        <></>
      )
      }
      </div>
    </div>

    )
  }
  
  export default AllItems;