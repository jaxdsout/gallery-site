function AllEvents ({ events }) {
  const sortedEvents = events.sort((a, b) => new Date(a.time) - new Date(b.time));
  const filteredEvents = sortedEvents.filter(event => event.id !== 4);

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric", 
      minute: "numeric", 
      hour12: true
    };
  
    return date.toLocaleString("en-US", options).replace(", ", " ");
  }
  
    return (
        <div className='events_page'>
          <h3 className='events_logo'>UPCOMING EVENTS.</h3>
          {filteredEvents.map((event) => (
            <div className="event_container" key={event.id}>
              <img className='event_poster'
                src={event.poster}
                alt={event.title}
              />
              <div className='event_info'>
                <div className="event_header">
                  <h4 className='event_title'>{event.title}</h4>
                  <p className='event_time'>{formatDate(event.time)}</p>
                </div>
                <div>
                    <p className='event_description'>{event.description}</p>
                {event.creator ? (
                  <p className='event_creator'>Featured Artist: {event.creator.name}</p>
                ) : null}
                </div>
              </div>
          </div>
        ))}
      </div>
    )
}

export default AllEvents;