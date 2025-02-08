import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Creator ({creators, items}) {
  const { id } = useParams()
  const creator = creators.find(creator => creator.id === parseInt(id))
  const creator_items = items.filter((item) => creator.id === item.creator_id)

  return (
    creator ? (
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center">
        <div className="flex flex-col items-center justify-center">
          <Link to={"/creators/all/"} className="mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="white" className="size-10 hover:stroke-[#464646]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
            </svg>
          </Link>
          <div className="bg-[#9f9f9f] rounded-xl p-6 md:mt-0 border-2 border-[#a4a4a4] drop-shadow-md max-w-[399px] min-w-[399px]">
            <div className="flex flex-row justify-between items-baseline">
                <h3 className="uppercase text-2xl font-extrabold text-white">{creator.name}</h3>
                <p><a className="font-extrabold hover:text-[#1b1b1b]" href={creator.website} target="_blank" rel="noopener noreferrer">{creator.role.toLowerCase()} website</a></p>            
              </div>
              <p>{creator.about}</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-7 md:mt-0 mb-10 md:mb-0 ">
          <div className="art-scrollbar p-5 grid grid-cols-2 gap-4 overflow-y-scroll min-h-[499px] max-h-[500px]">
            {creator_items.map((item, index) => (
              <Link to={`/items/${item.id}/`}>
                <img
                  src={item.image} 
                  alt={item.title}
                  key={index}
                  style={{ width: '300px' }}
                  className="fancy-hover rounded-lg ml-3 mr-3"
                />
              </Link>
            ))}
            </div>
        </div>
      </div>
    ) : null
  );
}

export default Creator