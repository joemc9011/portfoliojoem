import React from 'react';
import './Nav.css'
    

    

function Navbar({projlink, piclink, contactlink, photolink}) {
    return (
    


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <h1 class="navbar-brand">Joe McAndrew</h1>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href={piclink}>About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href={projlink}>Projects</a>
                        </li>
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