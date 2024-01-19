import React from "react";
import { Link } from "react-router-dom";

function CreatorsAll({creators}) {
  return (
    <div>
      <h3>CREATORS</h3>
      {creators.map((creator) => (
        <ul key={creator.id}>
          <li>
            <Link to={`/creators/${creator.id}`}>{creator.name}</Link>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default CreatorsAll;