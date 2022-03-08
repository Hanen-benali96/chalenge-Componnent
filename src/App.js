import Header from './components/Header.js';
import './App.css';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
