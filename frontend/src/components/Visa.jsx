import React from 'react';
import './Visa.css';

const Visa = () => {
  return (
    <div className="visa-section">
      <h2 className="section-title">
        Visa <span className="highlight">Details</span>
      </h2>

      <div className="visa-info-box">
        <div className="visa-item">
          <span className="label">Visa Type :</span>
          <span className="value">Tourist</span>
        </div>
        <div className="visa-item">
          <span className="label">Validity:</span>
          <span className="value">30 Days</span>
        </div>
        <div className="visa-item">
          <span className="label">Processing Date :</span>
          <span className="value">14/06/2025</span>
        </div>
      </div>

      <div className="cta-container">
        <h3 className="cta-heading">PLAN. PACK. GO!</h3>
        <button className="book-button">Book Now</button>
      </div>
    </div>
  );
};

export default Visa;
