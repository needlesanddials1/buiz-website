import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkWithUs from './components/WorkWithUs';
import Process from './components/Process';
import CostScale from './components/CostScale';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer';
import AIAuditLandingPage from './components/AIAuditLandingPage';

import './App.css';

// Home page layout
function HomePage() {
  return (
    <>
      {/* Hero section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Work With Us section */}
      <section id="work-with-us">
        <WorkWithUs />
      </section>

      {/* Process section */}
      <section id="process">
        <Process />
      </section>

      {/* Cost Scale section */}
      <section id="cost-scale">
        <CostScale />
      </section>

      {/* FAQ section */}
      <section id="faq">
        <FAQ />
      </section>
    </>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  return (
    <Router>
      <div className="App">
        {/* Navbar with page state */}
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About setCurrentPage={setCurrentPage} />} />
          <Route path="/ai-audit" element={<AIAuditLandingPage />} />
          {/* You can add more routes here in the future */}
        </Routes>

        {/* Footer with page state */}
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </Router>
  );
}

export default App;
