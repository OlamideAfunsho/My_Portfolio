import {useState} from "react";
import { Link } from 'react-scroll';

import "./Navbar.css";
import hamburgerMenu from './images/icon-hamburger.svg';
import closeMenu from './images/icon-close.svg';

const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false);

    

     return ( 
          <nav className="navbar">
               <a href="/" className="title">Prodigy</a>
               <div className="menu">

                    <img src={
                         menuOpen 
                         ? (closeMenu)
                         : (hamburgerMenu)
                    }
                     alt="hamburger-menu" className={`hamburger-menu ${menuOpen ? 'close-icon' : ''}`} 
                     onClick={() => setMenuOpen(!menuOpen)} />
                    <ul className={`menuItems ${menuOpen ? 'menuOpen' : ''}`}>
                         <li><Link to="about" smooth={true} duration={500} className="nav-link" onClick={() => setMenuOpen(false)} >About</Link></li>
                         <li><Link to="experience" smooth={true} duration={500} className="nav-link" onClick={() => setMenuOpen(false)}>Experience</Link></li>
                         <li><Link to="projects" smooth={true} duration={500} className="nav-link" onClick={() => setMenuOpen(false)}>Projects</Link></li>
                         <li><Link to="contact" smooth={true} duration={500} className="nav-link" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    </ul>
               </div>
          </nav>
      );
}
 
export default Navbar;