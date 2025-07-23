import React from 'react';
import './PaymentPlan.css';

const PaymentPlan = () => {
  return (
    <div className="payment-card">
      <h2 className="payment-title">
        Payment <span className="highlight">Plan</span>
      </h2>

      <div className="amount-box">
        <div className="amount-row">
          <div className="label">Total Amount</div>
          <div className="value">₹ 9,00,000 For 3 Pax (Inclusive Of GST)</div>
        </div>
        <div className="amount-row">
          <div className="label">TCS</div>
          <div className="value">Not Collected</div>
        </div>
      </div>

      <div className="installment-table">
        <div className="header-row">
          <div className="col-header">Installment</div>
          <div className="col-header">Amount</div>
          <div className="col-header">Due Date</div>
        </div>

        <div className="body-row">
          <div>Installment 1</div>
          <div>₹2,50,000</div>
          <div>Initial Payment</div>
        </div>
        <div className="body-row">
          <div>Installment 2</div>
          <div>₹4,00,000</div>
          <div>Post Visa Approval</div>
        </div>
        <div className="body-row">
          <div>Installment 3</div>
          <div>Remaining</div>
          <div>20 Days Before Departure</div>
        </div>
      </div>

      <div className="visa-details">
        <h3>Visa <span className="highlight">Details</span></h3>
        <div className="visa-row">
          <div><strong>Visa Type:</strong> Tourist</div>
          <div><strong>Validity:</strong> 30 Days</div>
          <div><strong>Processing Date:</strong> 14/06/2025</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
