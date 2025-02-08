import { Link } from "react-router-dom"

function Home ({ items, events, featured_artist, keyword }) {
    const featured_set = items.filter(item => item.creator_name === featured_artist && item.description.includes(keyword))
    const featured_event = events[0]

    return (
        <div className="flex flex-col items-center justify-end">
            <img className="object-cover w-full h-1/2 md:h-full -mt-16" src="https://warehouse-bkt-0810.s3.amazonaws.com/header_copy.png" alt="banner" />
            <div className="wave-2 w-full p-3">
                <div className="flex flex-row justify-around items-center shadow-inner pb-10 pt-24">
                    <div className="w-1/2 h-[650px] pl-2 pr-4 text-center">
                        <h6 className="lowercase pointer-events-none font-semibold text-white tracking-[0.3rem] pb-2 pl-1 pr-1 text-wrap md:text-nowrap"> FEATURED COLLECTION </h6>
                        {featured_set && (
                            <Link to={"/items/featured/"}>
                            <img className="tile shadow-md w-full h-full rounded-2xl object-cover" src="https://warehouse-bkt-0810.s3.amazonaws.com/rhodes_aerospirit.png" alt={featured_set.title} /></Link>
                        )}  
                    </div>          
                    <div className="w-1/2 h-[650px] pl-4 pr-2 text-center">
                        <h6 className="lowercase pointer-events-none font-semibold text-white tracking-[0.3rem] pb-2 pl-1 pr-1 text-wrap md:text-nowrap"> UPCOMING EVENTS </h6>
                        {featured_event && (
                            <Link to={"/events/"}>
                            <img className="tile shadow-md w-full h-full rounded-2xl object-cover" src={featured_event.poster} alt={featured_event.title} /></Link>
                        )}  
                    </div>    
                </div>      
            </div>
        </div>
    )
}

export default Home