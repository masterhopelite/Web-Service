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
import Project from './components/ProjectManangement/project'
import Customize from './components/Customize/customize';
// import './components/ProjectManangement/'

 function App() {
  return (
    <div>
  <Navbar/>
  <HeroSection/>
  <Project/>
  
<Extension/>
<Customize/>  
<Pricing/>
<WorkManagement/>
<FreeTrial/>
 <Footer/>

     </div>
  );
}

export default App;
