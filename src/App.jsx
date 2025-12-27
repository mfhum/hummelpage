import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero/Hero';
import Navbar from './sections/Navbar/Navbar';
import Footer from './sections/Footer/Footer';
import Unique from './sections/Unique/Unique';
import Impressum from './sections/Impressum/Impressum';
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Cursor from './components/Cursor/Cursor';
import ScrollProgress from './components/animations/ScrollProgress/ScrollProgress';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Cursor />
              <ScrollProgress />
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
