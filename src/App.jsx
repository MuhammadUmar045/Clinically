import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar1';
import Footer from './components/Footer1';
import SearchModal from './components/SearchModel';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Navbar onSearchOpen={() => setSearchOpen(true)} />
        {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;