import Item from "../components/Item";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchBar from "../components/SearchBar";

function ItemsAll({ items }) {
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
    <div className="flex flex-col items-center justify-center w-full">
      <SearchBar 
        searchString={searchString} 
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        handleCategory={handleCategory}
      />
      {emptyResults && 
        <div className="mb-5">
          <p>No results found for "
            <span className="font-extrabold">{lastSearch}</span>" in 
            <span className="font-extrabold"> {category}</span>. Showing <b>all</b> results instead.
          </p>
        </div>
      }
      <div className="art-scrollbar p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 overflow-y-scroll min-h-[899px] max-h-[900px]">
        {displayedItems.map((item, index) => (
          <Item key={index} item={item} onItemClick={handleItemClick} />
        ))}
      </div>
    </div>
  );
}

export default ItemsAll;