import './App.css';
import Hero from './components/Hero.js';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
