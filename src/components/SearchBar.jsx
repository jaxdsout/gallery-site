
function SearchBar({ searchString, handleSearch, handleSubmit, handleCategory }) {

    const handleUserChoice = (event) => {
        const userChoice = event.target.value;
        handleCategory(userChoice);
    }
    
    return (
        <div className="flex flex-row justify-center pt-3 pb-5">
            <input 
                className="w-[180px] rounded-xl drop-shadow-sm shadow-inner indent-3" 
                type="search" 
                placeholder="search..."
                value={searchString}
                onChange={handleSearch}
                onKeyDown={handleSubmit}
            />
            <select className="font-semibold w-[120px] tracking-[0.05rem] ml-2 mr-2 text-white bg-black border-2 border-[#808080] p-3 text-sm rounded-lg hover:bg-white focus:bg-white hover:text-black focus:text-black drop-shadow-sm" onChange={handleUserChoice}>
                <option value=''>ALL</option>
                <option value='painting'>PAINTINGS</option>
                <option value='wallart'>WALL ART</option>
                <option value='objects'>OBJECTS</option>
                <option value='prints'>PRINTS</option>
                <option value='goods'>GOODS</option>
            </select>
            <button className="bg-black border-2 border-[#808080] pt-2 pb-2 pl-4 pr-4 rounded-lg hover:bg-green-700 focus:bg-white drop-shadow-sm search-button" onClick={handleSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </button>
        </div>
    )
}

export default SearchBar;