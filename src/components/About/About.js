import React from 'react';
import './about.css'


function About({ pic }) {
  return (


<div className="card bg-dark text-white"  id='card'>
<img id='pic' src={pic} className="card-img" alt="..."/>
<div className="card-img-overlay">
  
  <p className="card-text" id='bio'> Hi! My name is Joe McAndrew. I am a creative and motivated individual. Adopted from Peru and thriving in New Jersey,
        I have managed to carve multiple successful roles for myself throughout the years. Within the last 10 years
        I have been successful with standup comedy and graphic design.
        Both feilds were met with determination, self-discipline, and free food in
        lieu of payment. Web development is my next mountain to scale.
        I am very confident I can achieve success within this field due to my ability to
        find and create rewarding lanes for myself, and determination.</p>
</div>
</div>



    );
  }

  export default About;