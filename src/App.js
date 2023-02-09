
import './App.css';
import Homepage from './components/HomePage/Homepage';
import Navbar from './components/Navbar/Navbar';
import Techstack from './components/TechStack/Techstack';
import Projects from "./components/Projects/Projects"

function App() {
  return (
    <>
    <Navbar/>
    <div className="app">
      
      <Homepage/>
      <Techstack/>
      <Projects/>
    </div>
    </>
  );
}

export default App;
