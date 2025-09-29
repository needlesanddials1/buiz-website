import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkWithUs from './components/WorkWithUs';
import Process from './components/Process';
import CostScale from './components/CostScale';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

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

export default App;