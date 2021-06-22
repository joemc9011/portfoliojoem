import React from "react";
const styles = {
  body: {
    textAlign: 'center',
    backgroundColor: ' rgb(99, 74, 102)',
    fontSize: '20px',
    padding: '50px',
    height: '100%',
    marginTop: '30px'

  },
   info: {
    display: 'inline-block',
  }
}
function Contact() {
  return (
    <div style= {styles.body}>
  
      <h1>Contact</h1>
 <div style = {styles.info}>

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
           <a href="https://docs.google.com/document/d/1AKomnxBeWCwA_mAkxhp-berV6uLh43x525av48b1IzQ/edit?usp=sharing">
             View PDF
           </a>
         </l>
       </ul>
 </div>
      
      
    </div>
  );
}

export default Contact;
