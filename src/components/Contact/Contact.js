import React from "react"
import './contact.css'
function Contact(){
    return (
        <section className='contact'>
        <h1>Contact</h1>
        <div>
          <ul>
            <l>
              <h4>Email:</h4>
              <p>
                Joemc9011@gmail.com
       </p>
            </l>
            <l>
              <h4>Github:</h4>
              <a href="https://github.com/joemc9011">
                joemc9011
                    </a>
            </l>
            <l>
              <h4>Resume:</h4>
              <a href="https://drive.google.com/file/d/1KEf9uX4H-YpqoJYzcLeMUsEw7aEs_0vo/view?usp=sharing">
                View PDF
       </a>
            </l>
          </ul>
        </div>
        </section>
    )
}

export default Contact;