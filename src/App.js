import './App.scss';
import Navbar from './components/Navabar';
import Hero from './components/Hero';
import Usage from './components/Usage'; 
import About from './components/About';
import Footer from './components/Footer';
function App() {
  return (
    <>
    <div className="max-width bg-dark" id="desktop">
      <Navbar />
      <Hero />
      <Usage />
      <About />
    </div>
    <div className="max-width pos-rel">
      <Footer />
    </div>
    </>
  );
}

export default App;
