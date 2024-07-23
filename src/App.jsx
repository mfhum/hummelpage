import { useState } from 'react';
import Hero from './sections/hero';
import Navbar from './sections/navbar';
import Process from './sections/process';
import Footer from './sections/footer';
import Unique from './sections/unique';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Unique />
      <Process />
      <Footer />
    </>
  );
}

export default App;
