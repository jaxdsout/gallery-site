import "./components.css"

function SearchBar () {

    const triggerFilters = () => {

    }

    return (
        <div className="search">
        <input className="search_input" type="search" />
        <button className="filter_btn" onClick={triggerFilters}>
          FILTER
        </button>
        <button className="search_btn" type="submit">
          SEARCH
        </button>
      </div>
    )
}

export default SearchBar