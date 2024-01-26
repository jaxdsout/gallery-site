import './pages.css';

function AllEvents ({ events }) {
    console.log(events)
    
    return (
        <div className='events_page'>
          <h3 className='events_logo'>UPCOMING EVENTS.</h3>
          <hr></hr>
          {events.map((event) => (
            <div className="event_container" key={event.id}>
              <img className='event_poster'
                src={event.poster}
                alt={event.title}
              />
              <div className='event_info'>
                <h4>{event.title}</h4>
                <p>{event.time}</p>
                <p>{event.description}</p>
                {event.creator ? (
                  <p>Featured Artist: {event.creator.name}</p>
                ) : null}
              </div>
          </div>
        ))}
      </div>
    )
}

export default AllEvents;