import React, { useEffect, useState } from 'react'

function EventManagement() {
  const [events, setEvents] = useState([])
  const [selectedEventID, setSelectedEventID] = useState(null)

  useEffect(() => {
    const storedEventID = JSON.parse(localStorage.getItem('eventID'))
    if (storedEventID) {
      setSelectedEventID(storedEventID)
    }

    fetch('/events.json')
      .then(res => res.json())
      .then(data => {
        setEvents(data)
      })
      .catch(err => {
        console.log("Error fetching events:", err)
      })
  }, [])

  const handleSelect = (id) => {
    setSelectedEventID(id)
    localStorage.setItem('eventID', JSON.stringify(id))
  }

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            ID: {event.id} | Event: {event.event_name} | Date: {event.date} | Venue: {event.venue}
            <button onClick={() => handleSelect(event.id)}>
              {selectedEventID === event.id ? "Selected" : "Select"}
            </button>
            <br />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EventManagement
