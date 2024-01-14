import React from "react";
import Creator from './Creator'

function AllCreators({creators}) {
  return (
    <div>
      {creators.map((creator, index) => (
        <Creator key={index} creator={creator} />
      ))}
    </div>
  )
}

export default AllCreators;