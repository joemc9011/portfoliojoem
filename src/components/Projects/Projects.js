import React from 'react';
import './project.css'

function Projects({title, descrip, gitlink, pic}) {
    return (
        <div className="container" >
            <div id="top" class="row">
                <div className="col">
                    <div id="first" class="card" >
                        
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <img src={pic} class="card-img-top" alt = "#"/>
                            <p className="card-text">{descrip}</p> 
                            {/* tech used */}
                            <a href={gitlink} class="btn btn-primary">Take a look</a>
                            <a href={gitlink} class="btn btn-primary">Github Link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
};

export default Projects;