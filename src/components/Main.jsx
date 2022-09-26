import React from 'react';
import "../App.css";
import Me from "./images/Me.png";
import html from "./images/html.png";
import css from "./images/css.png";
import js from "./images/js.png";
import bootstrap from "./images/bootstrap.png";
import netlify from "./images/netlify.png";
import react from "./images/react.png";
import github from "./images/github.png";
import BasicHTMLPage from "./work/BasicHTMLPage.png";
import ReactBlogApp from "./work/ReactBlogApp.png";
import Instagram from "./work/Instagram.png";
import DigitalClock from "./work/DigitalClock.png";
import TodoAppUIMobile from "./work/TodoAppUIMobile.png";
import FeedbackForm from "./work/FeedbackForm.png";
import Food from "./work/Food.png";
import Gym from "./work/Gym.png";
import email from "./images/email.png";
import call from "./images/call.png";
import location from "./images/location.png";

  function Main() {
   return (
     <div>
        <div className="header">
          <h2 style={{display:"inline",marginLeft:"5vw",marginRight:"12vw",color:"#105652"}}>Swaliha Maindergi</h2>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#contact'>Contact</a>
         </div>
         <div id="home">
          <div className="iam">Hi, I am Swaliha Maindergi,
          <div className="developer"><b>A FRONT-END DEVELOPER</b></div> </div>
          <div className="ready">Get ready to turn ideas into reality..! 

            <div className="btn"><button className='hire'>Hire Me</button> <button className='resume'>Get Resume</button></div></div>
            <img className='image' src={Me} alt="Error" />
  <svg className='wavee' width="100%" height="100%" id="svg" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,500 C 0,500 0,250 0,250 C 65.64358974358973,291.1846153846154 131.28717948717946,332.3692307692308 221,341 C 310.71282051282054,349.6307692307692 424.49487179487176,325.7076923076923 507,301 C 589.5051282051282,276.2923076923077 640.7333333333332,250.79999999999995 703,254 C 765.2666666666668,257.20000000000005 838.571794871795,289.0923076923077 936,289 C 1033.428205128205,288.9076923076923 1154.9794871794873,256.8307692307692 1243,245 C 1331.0205128205127,233.16923076923078 1385.5102564102563,241.5846153846154 1440,250 C 1440,250 1440,500 1440,500 Z" stroke="none" stroke-width="0" fill="#35b3a0ff" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>

</div>
<br></br><br></br><br></br><br></br><br></br>
<div id="about">
<div><img className='ima' src={Me} alt="Error" /></div>
<div className='abt'><h1 className='abtme' style={{color:"#105652"}}> Profile Summary </h1><br></br>  
<ul>
  <li>A Self-motivated, graduate student in B.E. ( Bachelor of Engineering ) from Shivaji University looking for a job.</li>
  <li>Proficient in Web Technologies like HTML5, CSS3, Media Query, JavaScript, jQuery, React JS, Php and Responsive Web Applications. </li>
  <li>I have developed some projects using these skills like Backtracking, Digital Clock, React Blog App etc. also skilled in CSS framework Bootstrap and for backend I use Node JS. </li>
  <li>My temporary aim to be work for a organization that gives me scope to enhance my knowledge & use my skill in accordance with the latest trends and be a part of team that dynamically works towards growth of organization.</li>
</ul>
<br></br>
<div className="smallbox"><h5 style={{margin:"15px"}}>Languages/Library/Technology</h5> 
<div className="small">
<img src={html} alt="Error" />
<img src={css} alt="Error" />
<img src={js} alt="Error" />
<img src={netlify} alt="Error" />
<img src={bootstrap} alt="Error" />
<img src={react} alt="Error" />
<img src={github} alt="Error" />
</div>
</div>
</div>

 </div>
 
  <div id="portfolio"><h1 className='abtme' style={{color:"#105652"}}>My Portfolio</h1>
<div>
  <a href="https://swalihamaindergi.github.io/Project1/" target="_blank" rel="noreferrer"><img className='webimage' src={BasicHTMLPage} alt="loading" /></a>
  <a href="https://react-dolphin-0809vs.netlify.app/" target="_blank" rel="noreferrer"><img className='webimage' src={ReactBlogApp} alt="loading" /></a>
  <a href="https://swalihamaindergi.github.io/Instagram/" target="_blank" rel="noreferrer"><img className='webimage' src={Instagram} alt="loading" /></a>
  <a href="https://swalihamaindergi.github.io/jsProject1/" target="_blank" rel="noreferrer"><img className='webimage' src={DigitalClock} alt="loading" /></a>
  <a href="https://swalihamaindergi.github.io/cssProject3/" target="_blank" rel="noreferrer"><img className='webimage' src={TodoAppUIMobile} alt="loading" /></a>
  <a href="https://swalihareactassessment2.netlify.app/" target="_blank" rel="noreferrer"><img className='webimage' src={FeedbackForm}alt="loading" /></a>
  <a href="https://swalihamaindergi.github.io/FOOD/" target="_blank" rel="noreferrer"><img className='webimage' src={Food}alt="loading" /></a>
  <a href="https://swalihamaindergi.github.io/GYM/" target="_blank" rel="noreferrer"><img className='webimage' src={Gym}alt="loading" /></a>
</div>
</div>
<div id="contact">
<h1 className='abtme' style={{color:"#105652"}}>Contact Me</h1>
<div className="cont" style={{backgroundColor:"white",padding:"50px"}}>
<div style={{width:"35%",textAlign:"left"}}><h2 style={{color:"#105652" }}>Let's connect</h2>
Please do let me know if my skills is suitable for your requirement. we can connect via Email or simply you can ring me on Phone.<br></br><br></br>
<div className="con">
<div><img src={email} alt="" /> smaindergi786@gmail.com</div>
<div><img src={call} alt="" />  +919850427087</div>
<div><img src={location} alt="" />  Kolhapur,Maharastra,India (416219)</div>
</div>
</div>
<div className='sendme' ><h2 style={{color:"#105652"}}>Send me a message</h2>
<div className='inp'>Name*</div>
<input type="text" />
<div className='inp'>Phone Number*</div>
<input type="number" />
<div className='inp'>Email address*</div>
<input type="email" />
<div className='inp'>Message*</div>
<input style={{height:"50px"}} type="text" placeholder='your message here' /><br></br><br></br>
<input style={{width:"110px",height:"35px",color:"white",backgroundColor:"#FCA738",border:"none",cursor:"pointer"}} type="submit" value="Send Measage"/>
 </div>

</div>

</div> 


<div className="footer">&#169;2022 Swaliha Maindergi, All rights reserved.</div>
 </div>

   )
}
 
export default Main;