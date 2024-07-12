import { useState } from 'react';
import Hero from './sections/hero';
import Navbar from './sections/navbar';
import About from './sections/about';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
