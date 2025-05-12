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


  const searchItems = (searchString, category) => {
    const userSearch = encodeURIComponent(searchString);
    const url = `${process.env.REACT_APP_API_URL}items/?search=${userSearch}&category=${category}`;
    axios.get(url)
      .then((res) => {
        if (res.data.length === 0) {
          setEmptyResults(true);
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
    <div className="flex flex-col items-center justify-center w-full mt-16 md:mt-10 mb-20">
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
          <div className='flex flex-col items-center mb-5' style={{ color: 'black' }}>
            <img
              className='tile w-[20rem] h-[20rem] object-cover rounded-lg drop-shadow-md fancy-hover'
              src={item.image} 
              alt={item.title}
              onClick={() => handleItemClick(item)}
            />
            <div className='flex flex-row items-baseline mt-1 justify-center'>
              <p className='text-sm'>
                {item.title.length > 50
                  ? item.title.substring(0, 40) + '...'
                  : item.title}
                <span className="font-bold ml-4">${item.current_price}</span>
              </p> 
            </div> 
          </div>          
        ))}
      </div>
    </div>
  );
}

export default ItemsAll;