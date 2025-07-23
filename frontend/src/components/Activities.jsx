import React, { useEffect, useState } from 'react';
import './Activity.css'; // Create CSS for styling like the screenshot

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/activities')
      .then(res => res.json())
      .then(data => {
        const arr = Array.isArray(data) ? data : [data];
        setActivities(arr);
      })
      .catch(err => console.error('Failed to fetch activity data:', err));
  }, []);

  if (!activities.length) return <p>Loading activities...</p>;

  return (
    <div className="activity-container">
      <h3 className="activity-title">Activity <span>Table</span></h3>
      <table className="activity-table">
        <thead>
          <tr>
            <th>City</th>
            <th>Activity</th>
            <th>Date/Time</th>
            <th>Standard</th>
            <th>Time Required</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((item, index) => (
            <tr key={index}>
              <td>{item.city}</td>
              <td>{item.activity}</td>
              <td>{item.dateTime}</td>
              <td>{item.standard}</td>
              <td>{item.timeRequired}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="terms-note">
        <p><strong>Terms and <span>Conditions</span></strong></p>
        <a href="#">View all terms and conditions</a>
      </div>

      <div className="footer-info">
        <p><strong>Vigovia Tech Pvt. Ltd</strong></p>
        <p>Registered Office: Hdd-109 Cinnabar Hills, Links Business Park, Karnataka, India.</p>
        <p>Phone: +91-9XXXXXXXXX &nbsp; | &nbsp; Email ID: Contact@Vigovia.com</p>
      </div>
    </div>
  );
};

export default Activities;
