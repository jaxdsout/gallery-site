import React from "react";
import Item from './Item'

function AllItems({items}) {
  return (
    <div>
      {items.map((item, index) => (
        <div>
          <img style={{ width: '300px' }} src={item.image} alt={item.title}/>
          <br></br>
          <a href={`/items/${item.id}`}>{item.title}</a>
        </div>
      ))}
    </div>
  )
}

export default AllItems;