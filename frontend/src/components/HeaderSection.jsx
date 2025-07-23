import React, { useEffect, useState } from 'react';
import { FaPlaneDeparture, FaPlaneArrival, FaUserFriends, FaMapMarkedAlt, FaPlane } from 'react-icons/fa';
import './HeaderSection.css';

const Header = () => {
  const [header, setHeader] = useState({
    title: '',
    name: '',
    source: '',
    destination: '',
    arrivalDate: '',
    departureDate: '',
    members: ''
  });

  useEffect(() => {
    fetch('http://localhost:5000/basic-info')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setHeader(data[0]);
        }
      })
      .catch((err) => console.error('Failed to fetch header:', err));
  }, []);

  return (
    
    <div className="header-container">
      <h2 className='heading'>vi<span>go</span>via</h2>
      <div className='plane'>
        <h4>Plan.Pack.go <FaPlane/></h4>
        
      </div>

      <div className="header-box">
        <h2>Hi, {header.name}!</h2>
        <h1>Singapore Itinerary</h1>
        <p>{header.travelDays} Days, {header.nights} nights </p>
        <div className="icon-row">
          <FaPlaneDeparture />
          <FaPlaneArrival />
          <FaMapMarkedAlt />
          <FaUserFriends />
        </div>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <span className="label">Departure From</span>
          <span>{header.source}</span>
        </div>
        <div className="info-card">
          <span className="label">Departure</span>
          <span>{header.departureDate}</span>
        </div>
        <div className="info-card">
          <span className="label">Arrival</span>
          <span>{header.arrivalDate}</span>
        </div>
        <div className="info-card">
          <span className="label">Destination</span>
          <span>{header.destination}</span>
        </div>
        <div className="info-card">
          <span className="label">No. Of Travellers</span>
          <span>{header.members}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
