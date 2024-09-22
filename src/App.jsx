import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/hero';
import Navbar from './sections/navbar';
import Process from './sections/process';
import Footer from './sections/footer';
import Unique from './sections/unique';
import Impressum from "./sections/impressum.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Unique /><Process /><Footer /></>} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>

    </>
  );
}
function AppWrapper() {
  return (
  <Router>
    <App />
  </Router>
);
}


export default AppWrapper;
