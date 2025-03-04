import "./Contact.css";
import { Link } from 'react-scroll';

import mailIcon from './images/mail-icon.png';
import linkedinIcon from './images/linkedin-icon.png';

const Contact = () => {
     return ( 
          <section id='contact'>
               <div className='header'>
               <p className='para'>Get in touch</p>
               <h1 className='heading'>Contact Me</h1>
               </div>
               
               <div className='con-con'>
                    <div>
                         <img src={mailIcon} alt='mail-icon' />
                         <a href='mailto:abolamide77@gmail.com'>abolamide77@gmail.com</a>
                    </div>
                    <div>
                         <img src={linkedinIcon} alt='linkedIn-icon' />
                         <a href='https://www.linkedin.com/in/olamide-afunsho/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
               </div>

               <footer>
                   <nav className='footer-nav'>
                   <ul className="footer-items">
                         <li><Link to="about" smooth={true} duration={500} className="nav-link" >About</Link></li>
                         <li><Link to="experience" smooth={true} duration={500} className="nav-link" >Experience</Link></li>
                         <li><Link to="projects" smooth={true} duration={500} className="nav-link" >Projects</Link></li>
                         <li><Link to="contact" smooth={true} duration={500} className="nav-link" >Contact</Link></li>
                    </ul>
                   </nav>

                   <p className="copy-right">Copyright &copy; 2025 Olamide Afunsho. All Rights Reserved</p>
               </footer>
          </section>
      );
}
 
export default Contact;