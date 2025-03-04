import './Experience.css';
import checkMark from './images/checkmark-icon2.png';

const Experience = () => {
     return ( 
          <section id='experience'>
               <div className='header'>
               <p className='para'>Explore My</p>
               <h1 className='heading'>Experience</h1>
               </div>

               <div className='exp-con'>
                    <div className='col col-1'>
                         <h1>Frontend Development</h1>
                         <div className='flex-con'>
                              <div className='left-side'>
                         <div className='inner-con'>
                              <img src={checkMark} alt='check-mark' className='check-mark'/>
                              <div>
                              <span className='lang'>HTML</span>
                              <span className='level'>Experienced</span>
                              </div>
                              
                         </div>
                         <div className='inner-con'>
                              <img src={checkMark} alt='check-mark' className='check-mark'/>
                              <div>
                              <span className='lang'>SASS</span>
                              <span className='level'>Experienced</span>
                              </div>
                              
                         </div>
                         <div className='inner-con'>
                              <img src={checkMark} alt='check-mark' className='check-mark'/>
                              <div>
                              <span className='lang'>React</span>
                              <span className='level'>Intermediate</span>
                              </div>
                              
                         </div>
                              </div>
                              <div className="right-side">
                              <div className='inner-con'>
                              <img src={checkMark} alt='check-mark' className='check-mark'/>
                              <div>
                              <span className='lang'>CSS</span>
                              <span className='level'>Experienced</span>
                              </div>
                              
                         </div>
                         
                         <div className='inner-con'>
                              <img src={checkMark} alt='check-mark' className='check-mark'/>
                              <div>
                              <span className='lang'>JavaScript</span>
                              <span className='level'>Experienced</span>
                              </div>
                              
                         </div>
                         
                         <div className='inner-con'>
                              <img src={checkMark} alt='check-mark' className='check-mark'/>
                              <div>
                              <span className='lang'>Redux</span>
                              <span className='level'>Intermediate</span>
                              </div>
                              
                         </div>
                              </div>
                         
                        
                         </div>
                    </div>

                    <div className='col col-2'>
                    <h1>Backend Development</h1>
                    <div className='flex-con'>
                         <div className='left-side'>
                         <div className='inner-con'>
                              <img src={checkMark} alt='check-mark' className='check-mark'/>
                              <div>
                              <span className='lang'>Node JS</span>
                              <span className='level'>Basic</span>
                              </div>
                              
                         </div>
                         <div className='inner-con'>
                              <img src={checkMark} alt='check-mark' className='check-mark'/>
                              <div>
                              <span className='lang'>APIs</span>
                              <span className='level'>Basic</span>
                              </div>
                              
                         </div>
                         </div>
                        
                        <div className='right-side'>
                        <div className='inner-con'>
                              <img src={checkMark} alt='check-mark' className='check-mark'/>
                              <div>
                              <span className='lang'>Git</span>
                              <span className='level'>Basic</span>
                              </div>
                              
                         </div>
                        </div>
                         
                    </div>
                    </div>
               </div>
          </section>
      );
}
 
export default Experience;