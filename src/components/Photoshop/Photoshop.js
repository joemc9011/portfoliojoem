import React from "react";
import './photoshop.css';

function Photoshop({ pic, title, descrip}) {
    return (




<div className="card" id =  "bod" >
<img className='art' src={pic} alt="..."/>
  <div className="card-body">
  <h5 className="card-title" >{title}</h5>
              <p className="card-text">{descrip}</p>
  </div>
</div>



    )
};

export default Photoshop;