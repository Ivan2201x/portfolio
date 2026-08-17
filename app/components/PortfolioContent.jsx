'use client';

import Navbar from './navbar';
import Home from './home';
import Myskills from './myskills';
import Aboutme from './aboutme';
import Experience from './experience';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';

export default function PortfolioContent() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Myskills />
        <Aboutme />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
