import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import WorkWithUs from './components/WorkWithUs';
import Process from './components/Process';
import CostScale from './components/CostScale';
import FAQ from './components/FAQ';
import About from './components/About';
import AIAuditLandingPage from './components/AIAuditLandingPage';

import './App.css';

// Home Page as a separate component
function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>

      <section id="work-with-us">
        <WorkWithUs />
      </section>

      <section id="process">
        <Process />
      </section>

      <section id="cost-scale">
        <CostScale />
      </section>

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
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<About setCurrentPage={setCurrentPage} />}
          />
          <Route
            path="/ai-audit"
            element={<AIAuditLandingPage />}
          />
        </Routes>

        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </Router>
  );
}

export default App;
