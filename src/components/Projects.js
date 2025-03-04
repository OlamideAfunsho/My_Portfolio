import './Projects.css';
import project1 from './images/project-1.jpg';
import project2 from './images/project-2.jpg';
import project3 from './images/project-3.jpg';



const Projects = () => {
     return ( 
          <section id='projects'>
               <div className='header'>
               <p className='para'>Browse some of my</p>
               <h1 className='heading'>Projects</h1>
               </div>

               <div className='pro-con'>
                    <div className='pro pro-1'>
                         <img src={project1} alt="project-1" />
                         <h1>E-Commerce Product Page</h1>
                         <a href='https://github.com/OlamideAfunsho/E-Commerce-Product-Page' target="_blank" rel="noopener noreferrer" className='pro-btn btn-1'>Github</a>
                         <a href='https://olamideafunsho.github.io/E-Commerce-Product-Page/' target="_blank" rel="noopener noreferrer" className='pro-btn'>Live Site</a>
                    </div>
                    <div className='pro pro-2'>
                         <img src={project2} alt="project-2" />
                         <h1>Bookmark Landing Page</h1>
                         <a href='https://github.com/OlamideAfunsho/Bookmark-landing-page' target="_blank" rel="noopener noreferrer" className='pro-btn btn-1'>Github</a>
                         <a href='https://olamideafunsho.github.io/Bookmark-landing-page/' target="_blank" rel="noopener noreferrer" className='pro-btn'>Live Site</a>
                    </div>
                    <div className='pro pro-3'>
                        <img src={project3} alt="project-3" />
                         <h1>Multi-Step Form</h1>
                         <a href='https://github.com/OlamideAfunsho/Multi-Step-Form' target="_blank" rel="noopener noreferrer" className='pro-btn btn-1'>Github</a>
                         <a href='https://olamideafunsho.github.io/Multi-Step-Form/' target="_blank" rel="noopener noreferrer" className='pro-btn'>Live Site</a>
                    </div>
               </div>

          </section>
      );
}
 
export default Projects;