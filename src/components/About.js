import './About.css';
import heroImage2 from './images/hero-image-2.jpg';

const About = () => {
     return ( 
          <section className='about-con' id='about'>
               <div className='header'>
               <p className='para'>Get To Know More</p>
               <h1 className='heading'>About Me</h1>
               </div>
               
               <div className='about-content'>
               <img src={heroImage2} alt="hero-image-2" className='hero-image-2'/>
                    <div>
                    <p className='about-para'>
                    I'm a self-taught software developer and data scientist dedicated to solving real-world problems through code and data. 
                    My journey started with free online courses, countless hours of practice, and hands-on projects 
                    that allowed me to master the fundamentals of web development and data analysis.
                    </p>

                    <h3 className="list-head">What I Do:</h3>

                    <p className='about-para'>
                    
                   
                         <ul>
                              <li> Web Development: I build responsive, user-friendly websites and applications using HTML, CSS, JavaScript, and React. 
                              My projects, from multi-step forms to e-commerce product pages, showcase my ability to translate ideas into interactive digital experiences.</li>
                              <li>Data Science: I leverage Python along with libraries like Pandas, NumPy, and Matplotlib to clean, analyze, and visualize data. 
                              I enjoy uncovering insights that help inform decisions and drive improvements.</li>
                         </ul>
                    </p>
                    </div>
               </div>
          </section>
      );
}
 
export default About;