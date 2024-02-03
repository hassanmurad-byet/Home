import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import img from './imgs/img.jpeg';


import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import { BiWorld } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { PiToolboxFill } from "react-icons/pi";

import { Link } from 'react-router-dom';

import './home.css';


const Home = () => {

  const [text] = useTypewriter({
    words: ['Developer', 'Writer', 'Bloger'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section id="home">

      <div className='homeitem'>
        <div className="introContent">

          <div className="allintro">
            <span className="introtext">
            <img src={img} alt="Profile" className="backgroundimg" />
              <span className="introName balls" ></span><spam className='small top'>Hassan Murad</spam> <br />
              <span className='type'>   I'm a {' '} <span className='introdes'> {text} </span> <span> <Cursor cursorStyle='|' />  </span> </span>
              <p className="intropara"> I am a skilled web designer & developer with experience in
               creating a <br /> Reactjs dynamic website. And also Django Backend Support. </p></span>
            <div className='btnlinkss'> <Link to='/about' className='hireme'><PiToolboxFill className='btnImgs' />Hire Me</Link> </div>

          </div>
          
          </div>

   

        <div className="mylinks">

          <div className="ball">
            <a href="https://www.facebook.com/hassanmurad21/" className='Hlinks'>
              <FaFacebookF className='ballicons' />
            </a>
          </div>

          <div className="ball">
            <a href="/" className='Hlinks' >  <FaTwitter className='ballicons' /> </a>
          </div>

          <div className="ball">
            <a href="https://www.linkedin.com/in/hassan-murad-3bbaa8121/" className='Hlinks'> <FaLinkedinIn className='ballicons' /> </a>
          </div>

          <div className="ball">
            <a href="https://github.com/hassanmurad-byet" className='Hlinks'> <FaGithub className='ballicons' /> </a>
          </div>

          <div className="ball">
            <a href="https://www.instagram.com/__hassan.murad?fbclid=IwAR3Ypcuq6NyDHeYyGoAsFM1Fsy7CeQJyqXos-jb1uX2s4IX5I6Sh9Ugt6lQ" className='Hlinks'> <FaInstagram className='ballicons' /> </a>
          </div>
        </div>
      

      </div>




    </section >
  )
}

export default Home;