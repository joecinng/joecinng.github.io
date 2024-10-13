import './App.css';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Home from './components/Home';
import Project from './components/Project';
import Skills from './components/Skills';
import Workexperience from './components/Workexperience';
import CustomNavbar from './components/navbar';
import Service from './components/Service';
//import Footer from './components/Footer';

function App() {
  // return <Service/>
  return (
    <div className="App">
      <CustomNavbar/>
      <div class="scroll-container">
        <Home/>
        <Aboutme/>
        <Skills/>
        <Project/>
        <Workexperience/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
