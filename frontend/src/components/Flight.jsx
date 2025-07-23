import React, { useEffect, useState } from 'react';
import './Flight.css';

const Flight = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch('http://localhost:5000/flight');
        if (!response.ok) {
          throw new Error('Failed to fetch flight data');
        }

        const data = await response.json();
        const flightArray = Array.isArray(data) ? data : [data];
        setFlights(flightArray);
      } catch (error) {
        console.error('Error fetching flight data:', error);
      }
    };

    fetchFlights();
  }, []);

  if (!flights.length) {
    return <p>Loading flight details...</p>;
  }

  return (
    <div className="flight">
      <h2 className="section-heading">Flight Details</h2>
      {flights.map((flight, index) => (
        <div className="flight-card" key={index}>
          <div className="flight-row">
            <p>
              <strong>From:</strong>{' '}
              {flight?.from?.charAt(0).toUpperCase() + flight?.from?.slice(1)}
            </p>
            <p>
              <strong>To:</strong>{' '}
              {flight?.to?.charAt(0).toUpperCase() + flight?.to?.slice(1)}
            </p>
          </div>
          <div className="flight-row">
            <p>
              <strong>Flight:</strong> {flight?.flight}
            </p>
          </div>
          <div className="flight-row">
            <p>
              <strong>Date:</strong> {flight?.date || 'N/A'}
            </p>
            <p>
              <strong>Time:</strong> {flight?.Time || 'N/A'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Flight;
