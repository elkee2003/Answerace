import './Contact.css';
import { FaPhone, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <section
        id='contact'
        className="contact-wrapper"
    >
        <div className="paddings innerWidth flexColStart contact-container">
            <h1 className="primaryText">Contact Answerace</h1>
            <p className="secondaryText">
              Reach out to me via mobile or through my social media accounts
            </p>

            {/* Contact details */}
          <div className="contact-details">

            {/* Email and phone in one row */}
            <div className="contact-row">
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+234 901 322 7128</span>
              </div>

              <a 
                href="https://x.com/answer_ace" 
                className="contact-item"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaXTwitter className='contact-icon' />
                <span>@answer_ace</span>
              </a>

            </div>

            {/* Instagram and WhatApp */}
            <div className='contact-row'>
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/2349013227128" 
                  className="contact-item"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    <FaWhatsapp className="contact-icon" />
                    <span>Chat on WhatsApp</span>
                </a>

                {/* Instagram */}
                <a 
                href="https://www.instagram.com/answer_ace?igsh=djJ6OGhqdmVzNGdx"  
                className="contact-item"
                target="_blank" 
                rel="noopener noreferrer"
                >
                    <FaInstagram className="contact-icon" />
                    <span>
                      @answer_ace
                    </span>
                </a>
            </div>
          </div>

        </div>
    </section>
  );
};

export default ContactUs;