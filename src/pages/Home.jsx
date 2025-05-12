import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

function Home ({ items, events, featured_artist, keyword }) {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState('');

    const featured_set = items.filter(item => item.creator_name === featured_artist.name && item.description.includes(keyword));
    const featured_event = events[0];

    function formatDate(dateStr) {
        const date = new Date(dateStr);
        const options = {
          month: "long",
          day: "numeric",
          year: "numeric",
          hour: "numeric", 
          minute: "numeric", 
          hour12: true
        };
      
        return date.toLocaleString("en-US", options).replace(", ", " ");
    }

    return (
        <div className="flex flex-col items-center justify-start w-full ">
            <img className="object-cover -mt-16 max-h-[500px] w-full" src="https://warehouse-bkt-0810.s3.us-east-2.amazonaws.com/header.png" alt="banner" />
            <div className="wave-2 w-full p-3">
                <div className="flex flex-row justify-center items-end shadow-inner pb-10 pt-24">
                    <div className="w-1/2 lg:w-1/4 px-6 text-center flex flex-col items-center justify-end">
                        <h6 className="pointer-events-none font-semibold tracking-[0.3rem] pb-2 pl-1 pr-1 text-wrap md:text-nowrap"> FEATURED COLLECTION </h6>
                        {featured_set && (
                            <div onClick={() => navigate('/items/featured')} onMouseEnter={() => setHovered('collection')} onMouseLeave={() => setHovered('')} className="cursor-pointer flex flex-col items-center justify-center relative">
                                {hovered === 'collection' && (
                                    <div className="z-50 absolute font-bold top-50 left-50">
                                        <h6 className="text-5xl lg:text-5xl ">aerospirit</h6>
                                        <p className="uppercase">{featured_artist.name}</p>
                                    </div>
                                )}
                                <div className="h-[500px] w-[200px] md:w-[300px]">
                                    <img className="tile shadow-md w-full h-full rounded-2xl object-cover" src="https://warehouse-bkt-0810.s3.amazonaws.com/rhodes_aerospirit.png" alt={featured_set.title} style={{ opacity: hovered === 'collection' ? '40%' : '100%'}} />
                                </div>
                            </div>
                        )}  
                    </div>          
                    <div className="w-1/2 md:w-1/4 px-6 text-center flex flex-col items-center justify-end">
                        <h6 className="pointer-events-none font-semibold tracking-[0.3rem] pb-2 pl-1 pr-1 text-wrap md:text-nowrap"> UPCOMING EVENTS </h6>
                        {featured_event && (
                            <div onClick={() => navigate('/events')} onMouseEnter={() => setHovered('event')} onMouseLeave={() => setHovered('')} className="cursor-pointer flex flex-col items-center justify-center relative">
                               {hovered === 'event' && (
                                   <div className="z-50 absolute font-bold top-50 left-50">
                                       <h6 className="text-xl lg:text-4xl ">{featured_event.title}</h6>
                                       <p className="uppercase mt-3">{formatDate(featured_event.time)}</p>
                                   </div>
                               )}
                               <div className="h-[500px] w-[200px] md:w-[300px]">
                                <img className="tile shadow-md w-full h-full rounded-2xl object-cover" src={featured_event.poster} alt={featured_event.title} style={{ opacity: hovered === 'event' ? '40%' : '100%'}} />
                               </div>
                           </div>
                        )}  
                    </div>    
                </div>      
            </div>
        </div>
    )
}

export default Home