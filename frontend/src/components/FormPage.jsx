import React, { useState } from 'react';
import './FormPage.css';

const FormPage = () => {
  const [formData, setFormData] = useState({
    trip: {
      title: '',
      name: '',
      source: '',
      destination: '',
      members: '',
      arrivalDate: '',
      departureDate: ''
    },
    flights: [],
    hotels: [],
    activities: [],
    extraActivities: []
  });

  const [flightInput, setFlightInput] = useState({ from: '', to: '', date: '', time: '' });
  const [hotelInput, setHotelInput] = useState({ city: '', checkIn: '', checkOut: '', nights: '', name: '' });
  const [activityInput, setActivityInput] = useState({ day: '', time: '', description: '' });
  const [extraActivityInput, setExtraActivityInput] = useState({ name: '', location: '' });

  const updateSection = (section, newData) => {
    setFormData(prev => ({ ...prev, [section]: newData }));
  };

  const postToEndpoint = async (endpoint, data) => {
    try {
      const res = await fetch(`http://localhost:5000/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      return res.ok;
    } catch (err) {
      console.error(`Error posting to ${endpoint}:`, err);
      return false;
    }
  };

  const handleFinalSubmit = async () => {
    try {
      const pdfRes = await fetch('http://localhost:5000/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const blob = await pdfRes.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'itinerary.pdf';
      a.click();
    } catch (err) {
      console.error('Failed to generate PDF', err);
    }
  };

  return (
    <div className="form-container">
      {/* Trip Info Section */}
      <section>
        <h2>Trip Info</h2>
        <input placeholder="Trip Title" onChange={e => updateSection('trip', { ...formData.trip, title: e.target.value })} />
        <input placeholder="Name" onChange={e => updateSection('trip', { ...formData.trip, name: e.target.value })} />
        <input placeholder="Source" onChange={e => updateSection('trip', { ...formData.trip, source: e.target.value })} />
        <input placeholder="Destination" onChange={e => updateSection('trip', { ...formData.trip, destination: e.target.value })} />
        <input placeholder="Members" type="number" onChange={e => updateSection('trip', { ...formData.trip, members: e.target.value })} />
        <input type="date" onChange={e => updateSection('trip', { ...formData.trip, arrivalDate: e.target.value })} />
        <input type="date" onChange={e => updateSection('trip', { ...formData.trip, departureDate: e.target.value })} />
        <button onClick={() => postToEndpoint('trip', formData.trip)}>Save Trip Info</button>
      </section>

      {/* Flights Section */}
      <section>
        <h2>Flights</h2>
        <input placeholder="From" value={flightInput.from} onChange={e => setFlightInput({ ...flightInput, from: e.target.value })} />
        <input placeholder="To" value={flightInput.to} onChange={e => setFlightInput({ ...flightInput, to: e.target.value })} />
        <input type="date" value={flightInput.date} onChange={e => setFlightInput({ ...flightInput, date: e.target.value })} />
        <input type="time" value={flightInput.time} onChange={e => setFlightInput({ ...flightInput, time: e.target.value })} />
        <button onClick={async () => {
          const updatedFlights = [...formData.flights, flightInput];
          updateSection('flights', updatedFlights);
          await postToEndpoint('flight', flightInput);
          setFlightInput({ from: '', to: '', date: '', time: '' });
        }}>Add Flight</button>
      </section>

      {/* Hotels Section */}
      <section>
        <h2>Hotels</h2>
        <input placeholder="City" value={hotelInput.city} onChange={e => setHotelInput({ ...hotelInput, city: e.target.value })} />
        <input type="date" placeholder="Check-in" value={hotelInput.checkIn} onChange={e => setHotelInput({ ...hotelInput, checkIn: e.target.value })} />
        <input type="date" placeholder="Check-out" value={hotelInput.checkOut} onChange={e => setHotelInput({ ...hotelInput, checkOut: e.target.value })} />
        <input placeholder="Nights" type="number" value={hotelInput.nights} onChange={e => setHotelInput({ ...hotelInput, nights: e.target.value })} />
        <input placeholder="Hotel Name" value={hotelInput.name} onChange={e => setHotelInput({ ...hotelInput, name: e.target.value })} />
        <button onClick={async () => {
          const updatedHotels = [...formData.hotels, hotelInput];
          updateSection('hotels', updatedHotels);
          await postToEndpoint('hotel', hotelInput);
          setHotelInput({ city: '', checkIn: '', checkOut: '', nights: '', name: '' });
        }}>Add Hotel</button>
      </section>

      {/* Activities Section */}
      <section>
        <h2>Activities</h2>
        <input placeholder="Day" value={activityInput.day} onChange={e => setActivityInput({ ...activityInput, day: e.target.value })} />
        <input type="time" value={activityInput.time} onChange={e => setActivityInput({ ...activityInput, time: e.target.value })} />
        <input placeholder="Description" value={activityInput.description} onChange={e => setActivityInput({ ...activityInput, description: e.target.value })} />
        <button onClick={async () => {
          const updatedActivities = [...formData.activities, activityInput];
          updateSection('activities', updatedActivities);
          await postToEndpoint('activities', activityInput);
          setActivityInput({ day: '', time: '', description: '' });
        }}>Add Activity</button>
      </section>

      {/* Extra Activities Section */}
      <section>
        <h2>Extra Activities</h2>
        <input placeholder="Name" value={extraActivityInput.name} onChange={e => setExtraActivityInput({ ...extraActivityInput, name: e.target.value })} />
        <input placeholder="Location" value={extraActivityInput.location} onChange={e => setExtraActivityInput({ ...extraActivityInput, location: e.target.value })} />
        <button onClick={async () => {
          const updatedExtras = [...formData.extraActivities, extraActivityInput];
          updateSection('extraActivities', updatedExtras);
          await postToEndpoint('extra-activities', extraActivityInput);
          setExtraActivityInput({ name: '', location: '' });
        }}>Add Extra Activity</button>
      </section>

      {/* Final Submit */}
      <section>
        <h2>Submit & Generate PDF</h2>
        <button onClick={handleFinalSubmit}>Generate PDF</button>
      </section>
    </div>
  );
};

export default FormPage;
