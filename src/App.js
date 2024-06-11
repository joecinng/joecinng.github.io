import './App.css';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Home from './components/Home';
import Project from './components/Project';
import Workexperience from './components/Workexperience';
import CustomNavbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <CustomNavbar/>
      <div class="scroll-container">
        <Home/>
        <Aboutme/>
        <Project/>
        <Workexperience/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
