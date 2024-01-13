import React from "react";
import Item from './Item'

function AllItems({items}) {
  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  )
}

export default AllItems;