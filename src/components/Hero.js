import './Hero.css';
import { Link } from 'react-scroll';
import heroImage from './images/hero-image.jpg';
import linkedinIcon from './images/linkedin-icon.png';
import githubIcon from './images/github-icon.png';


const Hero = () => {
     return (  
          <section className='container'>
                <img src={heroImage} alt="hero-image" className='hero-image'/>
               <div className='content'>
                   
                    <p className='desc desc-1'>Hellooo there, I'm</p>
                    <h1 className='title-2'> Olamide</h1>
                    <p className='desc desc-2'>Software Developer</p>

                    <div className='btn-container'>
                         <a href = "/Afunsho_Olamide_Resume.pdf" className='btn btn-color-1' download>Download CV</a>
                         <Link to="contact" smooth={true} duration={500} className="btn btn-color-1">Contact Info</Link>
                    </div>

                    <div className='socials'>
                         <a href="https://www.linkedin.com/in/olamide-afunsho/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="linkedin-icon" className='socials-link'/></a>
                         <a href='https://github.com/OlamideAfunsho' target="_blank" rel="noopener noreferrer"><img src={githubIcon} alt="github-icon" className='socials-link'/></a>
                    </div>
                    
               </div>
          </section>
     );
}
 
export default Hero;