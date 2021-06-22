import React from "react";
import Welcome from './pages/Welcome';
import Footer from './components/Footer/Footer';

const  styles = {
  page: {
    backgroundColor: 'black'
  }
}
function App() {
  return (
      
  <div className = 'page' style = {styles.page}>
    
    <Welcome/>
    <Footer/>
  </div>
  
  );
}

export default App;
