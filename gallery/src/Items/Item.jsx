function Item ({ item }) {
  
    return (
      item ? (
        <div>
            <ul>
                <li>{item.title}</li>
                <li>by {item.creator.name}</li>
                <li>{item.dimensions}</li>
                <li>{item.materials_used}</li>
                <img src={item.image} alt={item.title}/>
            </ul>
        </div>
      ) : null
    );
}

export default Item