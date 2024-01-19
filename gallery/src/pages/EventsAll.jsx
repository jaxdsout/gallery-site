import './pages.css';

function AllEvents ({ events }) {
    console.log(events)
    
    return (
        <div>
        <h3>EVENTS</h3>
        {events.map((event) => (
          <div key={event.id}>
            <h4>{event.title}</h4>
            <p>{event.description}</p>
            <p>{event.time}</p>
            <img
              src={event.poster}
              alt={event.title}
              style={{ width: '300px' }}
            />
            {event.creator ? (
              <p>Featured Artist: {event.creator.name}</p>
            ) : null}
          </div>
        ))}
      </div>
    )
}

export default AllEvents;