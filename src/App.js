import './App.css';
import { useEffect, useState, useRef } from 'react';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Home from './components/Home';
import Project from './components/Project';
import Skills from './components/Skills';
import Workexperience from './components/Workexperience';
import CustomNavbar from './components/navbar';
// import Footer from './components/Footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const homeSection = document.querySelector('#home');
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollTop(!entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  const scrollToTop = () => {
    scrollContainerRef.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <CustomNavbar />
      <div className="scroll-container" ref={scrollContainerRef}>
        <Home />
        <Aboutme />
        <Skills />
        <Project />
        <Workexperience />
        <Contact />
      </div>

      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          <i class="bi bi-chevron-double-up"></i>
        </button>
      )}
    </div>
  );
}

export default App;
