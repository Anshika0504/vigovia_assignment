import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      
      <div className="footer-top-links">
        <p>Bali Tour Packages</p>
        <p>Japan Tour Packages</p>
        <p>Vietnam Tour Packages</p>
        <p>Malaysia Tour Packages</p>
        <p>Thailand Tour Packages</p>
        <p>Europe Tour Packages</p>
        <p>Culture Tour Package</p>
        <p>Luxury Tour Packages</p>
        <p>Dubai Tour Packages</p>
        <p>Turkey Tour Packages</p>
        <p>UAE Tour Packages</p>
        <p>Singapore Tour Packages</p>
        <p>Australia Tour Packages</p>
        <p>South Korea Tour Packages</p>
        <p>Honeymoon Tour Packages</p>
        <p>Adventure Tour Packages</p>
      </div>


      <div className="footer-grid">
        
        <div>
          <h4>Our offerings</h4>
          <p>Packages</p>
          <p>Visa</p>
          <p>Forex</p>
          <p>Hotels</p>
          <p>Flights</p>
        </div>


        <div>
          <h4>Popular destinations</h4>
          <p>Dubai</p>
          <p>Bali</p>
          <p>Thailand</p>
          <p>Singapore</p>
          <p>Malaysia</p>
        </div>


        <div>
          <h4>Vigovia Specials</h4>
          <p>Honeymoon Experience</p>
          <p>Group Tours</p>
          <p>Backpackers Club</p>
          <p>Offline Events</p>
        </div>

        
        <div>
          <h4>Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Vigovia Blog</p>
          <p>Partner Portal</p>
          <p>Accreditations</p>
        </div>


        <div>
          <h4>More</h4>
          <p>Travel Guidelines</p>
          <p>Terms</p>
          <p>FAQs</p>
          <p>Domestic Holidays</p>
        </div>

        
        <div className="footer-contact">
          <button className="cta-btn">Need Help? Call Us</button>
          <p className="phone">+91-9xxxx65441</p>
          <p className="label">Email</p>
          <p className="email">contact@vigovia.com</p>
          <p className="label">Address</p>
          <p className="address">
            #D-105 Concrete Hills Link Square <br />
            Bengaluru <br />
            North Bengaluru Industrial Sector 560017
          </p>
        </div>
      </div>


      <div className="footer-bottom">
        
        <div className="footer-branding">
          <h2 className="logo">vigovia</h2>
          <span className="tagline">PLAN. PACK. GO</span>
        </div>


        <div className="footer-payment">
          <h5>Payments</h5>
          <p>Razorpay · Stripe</p>
        </div>


        <div className="footer-social">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaYoutube />
        </div>

        
        <div className="footer-policies">
          <p>Privacy Policy</p>
          <p>Legal Notice</p>
          <p>Accessibility</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
