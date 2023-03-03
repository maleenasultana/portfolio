import "./App.css";
import Homepage from "./components/HomePage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Techstack from "./components/TechStack/Techstack";
import Projects from "./components/Projects/Projects";
import {Routes,Route} from 'react-router-dom';
import Resume from "./components/Resume";

function App() {
  return (
    <>     
   
      <Navbar />
 
        <div className="app">
       
         <Routes>
            <Route path="/" element={<Homepage />} />
        
       
            <Route path="/techstack" element={<Techstack />} />
         
            <Route path="/projects" element={<Projects />} />
      

          
            <Route path="/resume" element={<Resume />} />
        </Routes>
        </div>
     
    </>
  );
}

export default App;
