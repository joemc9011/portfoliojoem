import React from "react";
import './photoshop.css';

function Photoshop({ pic, title, descrip}) {
    return (
        <div className="card mb-3" id = "bod">
        <div className="row g-0">
          <div className="col-md-4">
            <img className='art' src={pic} alt="..."/>
          </div>
          <div className="col text" >
            <div className="card-body" id = 'photobody' >
              <h5 className="card-title" >{title}</h5>
              <p className="card-text">{descrip}</p>
            </div>
          </div>
        </div>
      </div>
    )
};

export default Photoshop;