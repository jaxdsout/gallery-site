import { Link } from "react-router-dom"

function FeaturedSet({ items, featured_artist, keyword }) {

    const featured_set = items.filter(item => item.creator_name === featured_artist && item.description.includes(keyword))

    return(
        <div className="flex flex-col items-center">
            <Link to={"/"}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-10 hover:stroke-[#464646]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>                
            </Link>
            <div className="flex flex-col items-center mt-10 mb-3 md:mb-10">
            <h3 className="lowercase italic -mb-5">FEATURED SET:</h3>
            <h3 className="lowercase text-6xl md:text-9xl text-white"> {keyword} </h3>

            </div>

            <div className="flex flex-col items-center bg-[#9f9f9f] rounded-xl p-6 mt-6 mb-10 md:mt-0 border-2 border-[#a4a4a4] drop-shadow-md">
                <p className="uppercase text-xl font-extrabold text-[#6c6c6c]">{featured_artist}</p>
                <p> a little blurb about the featured text</p>
                <h4 className="mt-1 font-semibold italic"> browse the full collection: </h4>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center mb-10">
                {featured_set.map(item => (
                    <Link to={`/items/${item.id}/`}>
                        <img className="fancy-hover w-[200px] rounded-md md:ml-2 md:mr-2 mt-2 mb-2 md:mt-0 md:mb-0 drop-shadow-md" key={item.id} src={item.image} alt={item.title}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FeaturedSet