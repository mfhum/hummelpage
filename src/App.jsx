import { useState } from 'react';
import Hero from './sections/hero';
import Navbar from './sections/navbar';
import Process from './sections/process';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Process />
    </>
  );
}

export default App;
