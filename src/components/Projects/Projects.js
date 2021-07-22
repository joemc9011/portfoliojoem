import React from 'react';
import './project.css'

function Projects({title, descrip, gitlink, deploylink, pict}) {
    return (
     
                    <div id="first" class="card" >
                        
                        <div className="card-body" id = "body">
                            <h5 className="card-title">{title}</h5>
                            <img src={pict} class="card-img-top" alt = "#"/>
                            <p className="card-text">{descrip}</p> 
                            {/* tech used */}
                            <a href={deploylink} class="btn btn-primary" id="buttonproj">Take a look</a>
                            <a href={gitlink} class="btn btn-primary" id="buttonproj">Github Link</a>
                        </div>
                    </div>
     



    )
};

export default Projects;