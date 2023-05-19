import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import ServiceDetails from "./Components/ServiceDetails";


function AppRouter() {
  return (
    <>
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
  
      
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />}/>
      <Route exact path="/services" element={<Services />}/>
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/:id" element={<ServiceDetails />}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default AppRouter;