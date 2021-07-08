import React from 'react';
import './pic.css'


function Pic({ pict }) {
  return (


<div className="card bg-dark text-white"  id='card'>
<img id='pic' src={pict} className="card-img img-fluid" alt="..."/>

</div>



    );
  }

  export default Pic;