

function Events ({ events }) {
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
        <div className='flex flex-col items-center justify-center mt-5'>
            <h3 className='text-black lowercase font-semibold tracking-[0.3rem] text-4xl md:text-6xl mb-10'>UPCOMING EVENTS.</h3>
            {filteredEvents.map((event) => (
              <div className="flex flex-col w-10/12" key={event.id}>
                <img className='object-cover w-full h-[30rem] rounded-lg drop-shadow-md mb-1 md:mb-6'
                  src={event.poster}
                  alt={event.title}
                />
                <div className='flex flex-col items-center bg-[#9f9f9f] rounded-xl p-6 mt-6 mb-10 md:mt-0 border-2 border-[#a4a4a4] drop-shadow-md'>
                  <div className="flex flex-col justify-between flex-wrap">
                    <h4 className='text-white lowercase font-semibold tracking-[0.3rem] text-3xl md:text-5xl text-nowrap'>{event.title}</h4>
                    <p className='font-bold pb-2'>{formatDate(event.time)}</p>
                    <p className='text-sm'>{event.description}</p>
                  </div>
                  <div>
                  {event.creator && (
                    <p className='text-sm'>Featured Artist: {event.creator.name}</p>
                  )}
                  </div>
                </div>
              </div>
            ))}
      </div>
    )
}

export default Events;