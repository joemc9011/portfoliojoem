import React from 'react';
import './Header.css'


function Header({ picture }) {
  return (


    <div className="card mb-3" id="maincard">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={picture} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Bio</h5>
            <p className="card-text">My name is Joe McAndrew. I am a creative and motivated individual. Adopted from Peru and thriving in New Jersey,
            I have managed to carve multiple successful roles for myself throughout the years. Within the last 10 years
            I have been successful with standup comedy and graphic design.
            Both feilds were met with determination, self-discipline, and free food in
            lieu of payment. Web development is my next mountain to scale.
            I am very confident I can achieve success within this field due to my ability to
        find and create rewarding lanes for myself, and determination.</p>

    

          </div>
        </div>
      </div>
    </div>

  );
}

export default Header;