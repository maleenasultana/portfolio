import Resume from "../Resume";
import {Link } from 'react-router-dom'
import "./Navbar.css";



function Navbar() {

  return (
    <div className="navbar_container m-2 p-2">
        <div className="navbar_left"><p className='red_color'> HI, I am Maleena </p></div>
        
            <div className="navbar_right">
         
            <p><Link to="/">About</Link></p>
            <p><Link to="/techstack">TechStack</Link></p>
           <p> <Link to="/projects">Projects</Link></p>
            <p><Link to="/Resume">Resume</Link></p>
                
                </div>
               
           
            
        </div>
      
   
  )
}

export default Navbar;