import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkWithUs from './components/WorkWithUs';
import Process from './components/Process';
import CostScale from './components/CostScale';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer';
import AIAudit from './components/AIAudit'; // 👈 add your AI Audit component
import './App.css';

function HomePage({
  currentPage,
  setCurrentPage,
}: {
  currentPage: 'home' | 'about';
  setCurrentPage: React.Dispatch<React.SetStateAction<'home' | 'about'>>;
}) {
  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'home':
      default:
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
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  return (
    <Router>
      <Routes>
        {/* Normal website */}
        <Route
          path="/"
          element={<HomePage currentPage={currentPage} setCurrentPage={setCurrentPage} />}
        />

        {/* Hidden AI Audit landing page */}
        <Route path="/aiaudit" element={<AIAudit />} />
      </Routes>
    </Router>
  );
}

export default App;
