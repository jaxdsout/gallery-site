function Creator ({ creator }) {
  
  return (
    creator ? (
      <div>
          <ul>
              <li>{creator.name}</li>
              <li>{creator.category}</li>
              <li>{creator.about}</li>
          </ul>
      </div>
    ) : null
  );
}

export default Creator