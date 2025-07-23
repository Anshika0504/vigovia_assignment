import React from 'react';
import './InfoCard.css';

const InfoCard = () => {
  return (
    <div className="card-wrapper">
      <div className="card-section">
        <h2 className="section-heading">
          Important <span className="highlight">Notes</span>
        </h2>
        <div className="card-table">
          <div className="card-column title">
            <div className="column-header">Point</div>
            <div className="column-item">Airlines Standard Policy</div>
            <div className="column-item">Flight/Hotel Cancellation</div>
            <div className="column-item">Trip Insurance</div>
            <div className="column-item">Hotel Check-In & Check Out</div>
            <div className="column-item">Visa Rejection</div>
          </div>
          <div className="card-column details">
            <div className="column-header">Details</div>
            {[...Array(4)].map((_, i) => (
              <div className="column-item" key={i}>
                In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable
                Component Cannot Be Reimbursed At Any Cost.
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card-section">
        <h2 className="section-heading">
          Scope Of <span className="highlight">Service</span>
        </h2>
        <div className="card-table">
          <div className="card-column title">
            <div className="column-header">Service</div>
            <div className="column-item">Flight Tickets And Hotel Vouchers</div>
            <div className="column-item">Web Check-in</div>
            <div className="column-item">Support</div>
            <div className="column-item">Cancellation Support</div>
            <div className="column-item">Trip Support</div>
          </div>
          <div className="card-column details">
            <div className="column-header">Details</div>
            <div className="column-item">Delivered 3 Days Post Full Payment</div>
            <div className="column-item">Boarding Pass Delivery Via Email/WhatsApp</div>
            <div className="column-item">Chat Support – Response Time: 4 Hours</div>
            <div className="column-item">Provided</div>
            <div className="column-item">Response Time: 5 Minutes</div>
          </div>
        </div>
      </div>

      <div className="card-section">
        <h2 className="section-heading">
          Inclusion <span className="highlight">Summary</span>
        </h2>
        <div className="card-table">
          <div className="card-column title">
            <div className="column-header">Category</div>
            <div className="column-item">Flight</div>
            <div className="column-item">Tourist Tax</div>
            <div className="column-item">Hotel</div>
          </div>
          <div className="card-column count">
            <div className="column-header">Count</div>
            <div className="column-item">2</div>
            <div className="column-item">2</div>
            <div className="column-item">2</div>
          </div>
          <div className="card-column details">
            <div className="column-header">Details</div>
            <div className="column-item">All Flights Mentioned</div>
            <div className="column-item">
              Singapore,Sydney
              
            </div>
            <div className="column-item">
              Airport To Hotel 
            </div>
          </div>
          <div className="card-column status">
            <div className="column-header">Status / Comments</div>
            <div className="column-item">Awaiting Confirmation</div>
            <div className="column-item">Awaiting Confirmation</div>
            <div className="column-item">Included</div>
          </div>
        </div>
        <div className="footer-note">
          <strong>Transfer Policy (Refundable Upon Claim):</strong> If Any Transfer Is Delayed Beyond 15 Minutes,
          Customer Can Claim Refund.
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
