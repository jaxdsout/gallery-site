import { Link } from "react-router-dom";

function CreatorsAll({creators}) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="lowercase text-8xl text-white font-bold mb-10 user-select-none pointer-events-none">CREATORS</h3>
      {creators.map((creator) => (
            <Link to={`/creators/${creator.id}`} className="uppercase font-bold text-4xl mb-5 text-[#f5f5f5] hover:text-black fancy-hover active:text-white">
              {creator.name}
            </Link>
      ))}
    </div>
  )
}

export default CreatorsAll;