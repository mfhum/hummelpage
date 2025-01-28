import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/hero';
import Navbar from './sections/navbar';
import Footer from './sections/footer';
import Unique from './sections/unique';
import Impressum from './sections/impressum.jsx';
import Skills from "./sections/skills.jsx";
import Projects from "./sections/projects.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <Hero />
              <Projects />
              <Unique />
              <Skills />
              <Footer />
            </>
          }
        />
        <Route path='/impressum' element={<Impressum />} />
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
