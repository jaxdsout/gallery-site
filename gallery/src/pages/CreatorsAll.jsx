import React from "react";
import { Link } from "react-router-dom";

function CreatorsAll({creators}) {
  return (
    <div className="creators_page">
      <h3 className="creators_logo">CREATORS. </h3>
      {creators.map((creator) => (
        <ul key={creator.id}>
          <li className="nav_creator">
            <Link to={`/creators/${creator.id}`}>{creator.name}</Link>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default CreatorsAll;