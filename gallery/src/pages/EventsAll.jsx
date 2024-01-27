import '../styles/event.css'

function AllEvents ({ events }) {
    
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
                <h4 className='event_title'>{event.title}</h4>
                <p className='event_description'>{event.description}</p>
                {event.creator ? (
                  <p className='event_creator'>Featured Artist: {event.creator.name}</p>
                ) : null}
                <p className='event_time'>{event.time}</p>
              </div>
          </div>
        ))}
      </div>
    )
}

export default AllEvents;