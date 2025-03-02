import React from 'react';
import './Shop.css';

const Shop = () => {
  return (
    <section
        id='shop'
        className="shop-wrapper"
    >
        <div className="paddings innerWidth flexColStart shop-container">
            <h1 className="primaryText">Shop & Hours</h1>
            <p className="secondaryText">
            Find Answerace At:Rainbow Town, Port Harcourt
            </p>
            <p>Come visit my shop and enjoy a premium grooming experience in a relaxed and stylish setting.</p>

            <h2>🕒 Opening Hours</h2>
            <p>
                • <b>Monday:</b> 9:00 AM - 8:00 PM
            </p>
            <p>• <b>Tuesday:</b> Closed</p>
            <p>• <b>Wednesday - Friday:</b> 9:00 AM - 8:00 PM</p>
            <p>
                • <b>Saturday:</b> 8:00 AM - 9:00 PM
            </p>
            <p>• <b>Sunday:</b> Closed</p>
        </div>
    </section>
  );
};

export default Shop;