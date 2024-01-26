import "../styles/searchbar.css"
import { useState } from "react"
import { Icon } from "semantic-ui-react";


function SearchBar ({ results, searchString, handleSearch, handleSubmit, handleCategory }) {
    
    const [userChoice, setUserChoice] = useState('')

    const handleUserChoice = (event) => {
        setUserChoice(event.target.value)
        console.log(userChoice)
        handleCategory(userChoice)
    }
    
    return (
        <div className="search_bar">
            <input 
                className="search_input" 
                type="search" 
                placeholder="search..."
                value={searchString}
                onChange={handleSearch}
                onKeyDown={handleSubmit}
                required
            />
            <select
                className="filters_dropdown"
                value={userChoice}
                onChange={handleUserChoice}
                defaultValue={''}
            >
                <option value=''>ALL</option>
                <option value='paintings'>PAINTINGS</option>
                <option value='wallart'>WALL ART</option>
                <option value='objects'>OBJECTS</option>
                <option value='prints'>PRINTS</option>
                <option value='goods'>GOODS</option>
            </select>
            <button className="search_btn" onClick={handleSubmit}>
                <Icon name="large search" text="Search" />
            </button>
            {results.length > 0 ? (
                <a href={"/items/all/"}>
                    <button className="reset_btn"> RESET </button> 
                </a>
            ) : null }
        </div>
       
    )
}

export default SearchBar