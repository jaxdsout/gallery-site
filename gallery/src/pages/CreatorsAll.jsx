import React from "react";

function CreatorsAll({creators}) {
  return (
    <div>
      {creators.map((creator, index) => (
          <ul>
            <li>
              <a href={`/creators/${creator.id}`}>{creator.name}</a>
            </li>
          </ul>
        ))}
    </div>
  )
}

export default CreatorsAll;