import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './components/NavBar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import WorkManagement from './components/WorkManagement/WorkManagement';
import Pricing from './components/Pricing/Pricing';
import Testimonial from './components/Testimonial/Testimonial';
 function App() {
  return (
    <div>
  <Navbar/>
  <HeroSection/>
<Pricing/>  

     </div>
  );
}

export default App;
