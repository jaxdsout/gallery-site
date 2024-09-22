import React from "react";
import { Link } from "react-router-dom";

function CreatorsAll({creators}) {
  return (
    <div className="creators_page">
      <h3 className="creator_type">CREATORS</h3>
      {creators.map((creator) => (
          <div className="creator_name_all">
            <Link to={`/creators/${creator.id}`}>{creator.name}</Link>
          </div>
      ))}
    </div>
  )
}

export default CreatorsAll;