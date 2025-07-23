import React, { useEffect, useState } from 'react';
import './HotelBookings.css';

const HotelBookings = () => {
  const [hotelData, setHotelData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/hotel')
      .then(res => res.json())
      .then(data => {
        const hotelsArray = Array.isArray(data) ? data : [data]; // Ensure it's always an array
        setHotelData(hotelsArray);
      })
      .catch(err => console.error('Failed to fetch hotel data:', err));
  }, []);

  if (!hotelData.length) return <p>Loading hotel bookings...</p>;

  return (
    <div className="hotel-booking-container">
      <h3 className="hotel-title">Hotel <span>Bookings</span></h3>
      <table className="hotel-table">
        <thead>
          <tr>
            <th>City</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Nights</th>
            <th>Hotel Name</th>
          </tr>
        </thead>
        <tbody>
          {hotelData.map((booking, index) => (
            <tr key={index}>
              <td>{booking.city}</td>
              <td>{booking.checkIn}</td>
              <td>{booking.checkOut}</td>
              <td>{booking.nights}</td>
              <td>{booking.hotelName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="hotel-notes">
        <ol>
          <li>All Hotels Are Tentative And Can Be Replaced With Similar.</li>
          <li>Breakfast Included For All Hotel Stays.</li>
          <li>All Hotels Will Be 4<sup>*</sup> And Above Category</li>
          <li>A maximum occupancy of 2 people/room is allowed in most hotels.</li>
        </ol>
      </div>
      <div className="footer-info">
        <p><strong>Vigovia Tech Pvt. Ltd</strong></p>
        <p>Registered Office: Hdd-109 Cinnabar Hills, Links Business Park, Karnataka, India.</p>
        <p>Phone: +91-9XXXXXXXXX &nbsp; | &nbsp; Email ID: Contact@Vigovia.com</p>
      </div>
    </div>
  );
};

export default HotelBookings;
