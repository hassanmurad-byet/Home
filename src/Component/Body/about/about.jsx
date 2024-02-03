import React, { useState } from 'react'
import './about.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
// import img from './imgs/ab2.png';
import img2 from './imgs/img22.jpeg';
import { PiUsersLight } from "react-icons/pi";
import { RiAwardFill } from "react-icons/ri";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";

import taeko from './imgs/logo.jpg';
import iubat from './imgs/Iubat-logo.png';
import spon from './imgs/spon.png';

import resume from './imgs/resume.pdf';

const About = () => {

  const [counterOn, setCounterOn] = useState(false);


  return (
    <div className='about'>
      <div className='abouts'>
        <div className="allinfos">
          <div className="infos">
            <div className="blkstyle"> </div>  <div className="blkstyle"> </div>
            <img src={img2} alt="" className='myimg' />

          </div>

          <div className="infos">

            <div className="aboutinfo">
              <div className="alltxt">
                <p className="bells"> <span className='me'> ABOUT ME  </span> </p>
                <h2 className="myname">Hassan Murad</h2>
                <p className="diss">Hello, I will be your next Software Engineer for <br /> next-level development with Django and Reactjs. So, let's introduce myself.....</p>
              </div>
              <div className="details">

                <div className="detail1">
                  <p className="head"> <span className='blod'>Birthday: </span>  01.02.2001</p>
                  <p className="head"> <span className='blod'>Phone: </span>  +8801533694189</p>
                  <p className="head"> <span className='blod'>Address: </span> Uttara-10, Dhaka, Bangladesh</p>
                  <p className="head"> <span className='blod'>Email: </span> hassanmurad1501@gmail.com</p>
                </div>
                <div className="detail1">
                  <p className="head"> <span className='blod'>Age: </span> 24</p>
                  <p className="head"> <span className='blod'>Study: </span>IUBAT</p>
                  <p className="head"> <span className='blod'>Depeartment: </span>Computer Science & Engineering</p>
                  <p className="head"> <span className='blod'>Freelance: </span> Available</p>
                </div>

              </div>

            </div>
            <button className='cv'> <a className='resume' href={resume} download='resume' >Download Resume </a> </button>
          </div>
          {/* onClick={downloadFileAtURL(PDF_FILE_URL)} */}
        </div>


        <div className="skill">

          <div className="mytxts">
            <h1 className='h1skills'>Programming & Language Skills</h1>
            <p className="des">
              <span className='blods'> Frontend with- <span className='extra'> HTML, CSS, JAVASCRIPT, REACT JS, BOOTSTRAP, MATERIAL UI </span>  </span> <br />
              <span className='blods'> Backend with-  <span className='extra'> PYTHON, DJANGO, NODE JS </span> </span> <br />
              <span className='blods'> Machine Learning with- <span className='extra'>PYTHON, TENSORFLOW, OPENCV, PANDAS, NUMPY, MATFLOTIBE </span> </span>
              </p>
          </div>

          <div className="allskillinfos">

            <div className="allskills">

              <div className='listhed' >
                <h3 className='h2Head'>HTML</h3>
                <span className='barline'><span className="myhtml"></span></span>
              </div>

              <div className='listhed'>
                <h3 className='h2Head'>CSS</h3>
                <span className='barline'><span className="mycss"></span></span>
              </div>

              <div className='listhed'>
                <h3 className='h2Head'>Javascript</h3>
                <span className='barline'><span className="myjavascript"></span></span>
              </div>

              <div className='listhed'>
                <h3 className='h2Head'>Java</h3>
                <span className='barline'><span className="myjava"></span></span>
              </div>

            </div>


            <div className="allskills">
              <div className='listhed'>
                <h3 className='h2Head'>ReactJs</h3>
                <span className='barline'><span className="myreact"></span></span>
              </div>
              <div className='listhed'>
                <h3 className='h2Head'>Python</h3>
                <span className='barline'><span className="mypython"></span></span>
              </div>
              <div className='listhed'>
                <h3 className='h2Head'>Django</h3>
                <span className='barline'><span className="mydjango"></span></span>
              </div>

              <div className='listhed'>
                <h3 className='h2Head'>MySQL</h3>
                <span className='barline'><span className="mysql"></span></span>
              </div>

            </div>
          </div>

        </div>

       <div className="Hapclinets">
        <h2 className="cli">Happy Client</h2>
        <div className="happyclients">

          <div className="clientcard">
            <div className="myball"> <PiUsersLight className="logos" /> </div>
            <div className="count">
              <h3 className='counters'>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  {counterOn && <CountUp start={100} end={150} duration={2} delay={0} />}
                  +
                </ScrollTrigger>
              </h3>
              <p className="hapyy">Happy Customers</p>
            </div>
          </div>

          <div className="clientcard">
            <div className='myball'>  <RiAwardFill className="logos" />   </div>
            <div className="count">
              <h3 className='counters'>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  {counterOn && <CountUp start={100} end={11} duration={2} delay={0} />}
                  +
                </ScrollTrigger>
              </h3>
              <p className="hapyy">Award Win</p>
            </div>
          </div>

          <div className="clientcard">
            <div className='myball'> <IoCheckmarkDoneCircleOutline className="logos" />  </div>
            <div className="count">
              <h3 className='counters'>
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  {counterOn && <CountUp start={100} end={32} duration={2} delay={0} />}
                  +
                </ScrollTrigger>
              </h3>
              <p className="hapyy">Complete Project</p>
            </div>
          </div>


        </div>
        </div>



        <div className="allpart">
          <h2 className='mypats'>My Partners</h2>
          <div className="parters">
            <img src={taeko} alt="" className="compa" />
            <img src={iubat} alt="" className="compa" />
            <img src={spon} alt="" className="compa" />
          </div>
        </div>
        
      </div>
    </div>

  )
}

export default About;