import React from 'react'
import './Services.css'
// import {BiCheck} from 'react-icons/bi'
import books from "../../assets/about11.jpg"
import exams from "../../assets/about12.jpg"
import tech from "../../assets/about13.jpeg"


const Services = () => {
  // const theme=useContext(ThemeContext);
  // const darkMode=theme.state.darkMode;

  return (
     <section id="services">
      <h5>What I Have Done</h5>
      <h2>Education</h2>
  
       <div className="e" id="edu">
            {/* <h2 className="e-title"></h2> */}
            {/* <div className="e-shape"></div> */}
            <div className="e-wrapper">
                
                <div className="e-left" >
                    <div className="content">
                        {/* <div className="back">
                            <div className="bg1"></div>
                            <div className="txt" style={{color:darkMode?"white":"black"}}>Primary Schooling</div>
                        </div> */}
                        <div className="e-wrap">
                            <div className="e-comp-title">Primary Schooling</div>
                            <div className="e-imgbox">
                                <img src={books} alt="book-img" className='e-img'/>
                            </div>
                            <div className="e-desc">
                                <p>I did my primary schooling from Delhi Public School, Junwani Durg. I was there for a period of 8 years after which I switched my school. I studied 9th and 10th from Delhi Publc School,Risali Bhilai. I passed 10th grade with a percentage of 93.8%. Along with studies I was also good in sports like football and cricket. </p>
                            </div>
                        </div>
                    </div>
                </div>
               
                
                <div className="e-center" >
                    <div className="content">
                    {/* <div className="back">
                            <div className="bg2"></div>
                            <div className="txt" style={{color:darkMode?"white":"black"}}>High Schooling</div>
                        </div> */}
                    <div className="e-wrap">
                        <div className="e-comp-title">High Schooling</div>
                        <div className="e-imgbox">
                            <img src={exams} alt="exams-img" className='e-img' />
                        </div>
                    <div className="e-desc">
                        As I studied gradually I got interested with subjects like Mathematics and Chemistry and therefore I took Science in the high school and studied the same in DPS Risali,Bhilai. I also started prep for JEE Mains exam and cracked the exam with more than 98 percentile. I passed my 12th grade with 87.6%.
                    </div>
                    </div>
                    </div>
                </div>
               
                <div className="e-right" >
                    <div className="content">
                        {/* <div className="back">
                            <div className="bg3"></div>
                            <div className="txt" style={{color:darkMode?"white":"black"}}>College</div>
                        </div> */}
                    <div className="e-wrap">
                        <div className="e-comp-title">College</div>
                        <div className="e-imgbox">
                            <img src={tech} alt="tech-img" className='e-img'/>
                            </div>
                    <div className="e-desc">
                        Currently I am a student of National Institute of Technology, Raipur pursuing Bachelor's of Technology in Information Technology. I have a CPI of 9.03 across the first 4 semesters of college. Eagerly looking forward to building my career in the Software Development Sector.
                    </div>
                    </div>
                    </div>
                </div>
               
            </div>
        </div>


    </section>
  )
}

export default Services