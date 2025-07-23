import React from 'react'
import './CompanyDetail.css';
const CompanyDetail = () => {
  return (
  <div className="company-details">
      <div className="company-info">
        <strong>Vigovia Tech Pvt. Ltd</strong><br />
        Registered Office: Hd-109 Cinnabar Hills,<br />
        Links Business Park, Karnataka, India.
      </div>
      <div className="contact-info">
        <p><strong>Phone:</strong> +91-99X9999999</p>
        <p><strong>Email ID:</strong> Contact@Vigovia.Com</p>
      </div>
      <div className="logo">
        <span className="vigovia-text">vigovia</span><br />
        <span className="tagline">PLAN.PACK.GO ✈</span>
      </div>
    </div>
  )
}

export default CompanyDetail
