import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/NavBar';
import Aboutme from './components/Aboutme';
import Myservices from './components/Myservices';
import Myportifolio from './components/Myportifolio';
import Myexperience from './components/Myexperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <HeroSection/>
        <Aboutme/>
        <Myservices/>
        <Myportifolio/>
        <Myexperience/>
        <Contact/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
