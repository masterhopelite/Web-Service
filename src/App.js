import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Sponsor from './components/Sponsers/Sponser';
import Navbar from './components/NavBar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import WorkManagement from './components/WorkManagement/WorkManagement';
import Pricing from './components/Pricing/Pricing';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import Extension from './components/Extension/Extension';
import FreeTrial from './components/FreeTrial/FreeTrial';
 function App() {
  return (
    <div>
  <Navbar/>
  <HeroSection/>
<Pricing/>  
<WorkManagement/>
<FreeTrial/>
 <Footer/>

     </div>
  );
}

export default App;
