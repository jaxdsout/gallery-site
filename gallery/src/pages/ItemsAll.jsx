import Item from "../components/Item";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";

function AllItems({ items }) {
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [lastSearch, setLastSearch] = useState('');
  const [category, setCategory] = useState('');
  const [emptyResults, setEmptyResults] = useState(false);

  const handleSearch = (event) => {
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      if (searchString.length > 0) {
        searchItems(searchString, category);
      }
    }
  };

  const handleCategory = (userChoice) => {
    setCategory(userChoice);
  };

  const handleItemClick = (item) => {
    navigate(`/items/${item.id}/`);
  };

  const displayEmptyResults = () => {
    setEmptyResults(true);
  };

  const searchItems = (searchString, category) => {
    const userSearch = encodeURIComponent(searchString);
    const url = `${process.env.REACT_APP_API_URL}items/?search=${userSearch}&category=${category}`;
    axios.get(url)
      .then((res) => {
        if (res.data.length === 0) {
          displayEmptyResults();
        }
        setResults(res.data);
        setLastSearch(searchString)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const displayedItems = results.length > 0 ? results : items;

  return (
    <div className="art-page">
      <SearchBar 
        searchString={searchString} 
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        handleCategory={handleCategory}
      />
      {emptyResults && 
        <div className="empty_results">
          <p>No results found for "
            <span className="search_string">{lastSearch}</span>" in 
            <span className="search_string"> {category}</span>. Showing <b>all</b> results instead.
          </p>
        </div>
      }
      <div className="all_items">
        {displayedItems.map((item, index) => (
          <Item key={index} item={item} onItemClick={handleItemClick} />
        ))}
      </div>
    </div>
  );
}

export default AllItems;