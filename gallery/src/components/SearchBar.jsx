import { Icon } from "semantic-ui-react";

function SearchBar({ searchString, handleSearch, handleSubmit, handleCategory }) {

    const handleUserChoice = (event) => {
        const userChoice = event.target.value;
        handleCategory(userChoice);
    }
    
    return (
        <div className="search_bar">
            <input 
                className="search_bar_input" 
                type="search" 
                placeholder="search..."
                value={searchString}
                onChange={handleSearch}
                onKeyDown={handleSubmit}
            />
            <select
                className="filters_dropdown"
                onChange={handleUserChoice}
            >
                <option value=''>ALL</option>
                <option value='painting'>PAINTINGS</option>
                <option value='wallart'>WALL ART</option>
                <option value='objects'>OBJECTS</option>
                <option value='prints'>PRINTS</option>
                <option value='goods'>GOODS</option>
            </select>
            <button className="search_btn" onClick={handleSubmit}>
                <Icon name="search" text="Search" />
            </button>
        </div>
    )
}

export default SearchBar;