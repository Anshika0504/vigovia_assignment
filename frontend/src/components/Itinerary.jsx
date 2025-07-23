import React, { useEffect, useState } from 'react';
import './Itinerary.css';

const Itinerary = () => {
  const [itinerary, setItinerary] = useState([]);
  const [flights, setFlights] = useState([]);

  const images = [
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1519821172141-b5d8f0c4ba75?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&h=500&fit=crop',
    'https://images.unsplash.com/photo-1499696010184-025b48c42080?w=800&h=500&fit=crop'
  ];

  useEffect(() => {
    
    fetch('http://localhost:5000/itinerary')
      .then(res => res.json())
      .then(data => setItinerary(Array.isArray(data) ? data : [data]))
      .catch(err => console.error('Failed to fetch itinerary data:', err));

    
    fetch('http://localhost:5000/flight')
      .then(res => res.json())
      .then(data => setFlights(Array.isArray(data) ? data : [data]))
      .catch(err => console.error('Failed to fetch flight data:', err));
  }, []);

  const timeToSlot = (time) => {
    const hour = parseInt(time.split(':')[0]);
    if (hour < 12) return 'Morning';
    if (hour < 17) return 'Afternoon';
    return 'Evening';
  };

  const getFlightsForDay = (date, slot) => {
    return flights.filter(flight => {
      if (flight.date !== date) return false;
      const flightHour = parseInt(flight.Time?.split(':')[0]);
      if (slot === 'Morning') return flightHour < 12;
      if (slot === 'Afternoon') return flightHour >= 12 && flightHour < 17;
      if (slot === 'Evening') return flightHour >= 17;
      return false;
    });
  };

  return (
    <div className="itinerary-container">
      {itinerary.map((day, index) => (
        <div key={index} className="itinerary-day">
          <div className="day-label">Day {day.day}</div>
          <div className="day-content">
            <img
              src={images[index % images.length]}
              alt={`Day ${day.day}`}
              className="day-image"
            />
            <div className="day-date">{day.date}</div>
            <div className="day-title">{day.title}</div>
            <div className="activities">
              {['Morning', 'Afternoon', 'Evening'].map(slot => (
                <div className="activity-slot" key={slot}>
                  <h4>{slot}</h4>
                  <ul>
                    {/* Activities */}
                    {day.activities
                      .filter(act => timeToSlot(act.time) === slot)
                      .map((act, i) => (
                        <li key={`act-${i}`}>{act.description} ({act.time})</li>
                      ))}


                    {getFlightsForDay(day.date, slot).map((flight, i) => (
                      <li key={`flight-${i}`}>
                        ✈️ {flight.from} ➝ {flight.to} — Flight {flight.flight} at {flight.Time}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itinerary;
