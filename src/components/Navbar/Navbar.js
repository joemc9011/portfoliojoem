import React from 'react';
import './Nav.css'
    

    

function Navbar({projlink, aboutlink, contactlink, photolink}) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid" >


            
         
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href={aboutlink}>About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href={projlink}>Projects</a>
                        </li>
                        <div >
                            <h1 id = 'navhead'>
                                Joe McAndrew
                           </h1>
                        </div>

                        <li class="nav-item">
                            <a class="nav-link" href={photolink}>Photoshop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href={contactlink}>Contact</a>
                        </li>
                    </ul>

            </div>
        </nav>
    )
};

export default Navbar;