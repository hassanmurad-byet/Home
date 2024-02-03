import React, { useRef } from 'react'
import './cont.css';
// import '../about/about.css';
import emailjs from '@emailjs/browser';

import { LuMailOpen } from "react-icons/lu";
import { BiWorld } from "react-icons/bi";
import { BsHeadset } from "react-icons/bs";

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_shr91lr', 'template_skk223f', form.current, 'D3uj-GWMMM1ENeptt').then((result) => {
      console.log(result.text);
      e.target.reset();
      alert('Email Sent !');
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <div className='Contact'>

      <div className="allcontactsinfo">
        <div className="myclis">
          <div className="myclients"><p className="clientHead"> <span className='span'>CONTACT  </span> <br />
            Contact Me </p> </div>

        </div>




        <div className="clients">

          <div className="contcard">
            <div className="contmyball"> <LuMailOpen className="contlogos" /> </div>
            <div className="contme">
              <h3 className='here'>My Mail Here</h3>
              <p className="inf">hassanmurad1501@gmail.com</p>
            </div>
          </div>

          <div className="contcard">
            <div className='contmyball'>  <BiWorld className="contlogos" />   </div>
            <div className="contme">
              <h3 className='here'>Visit My Site</h3>
              <p className="inf"> 14 Uttara-10, Dhaka </p>
            </div>
          </div>

          <div className="contcard">
            <div className='contmyball'> <BsHeadset className="contlogos" />  </div>
            <div className="contme">
              <h3 className='here'> Call To Me</h3>
              <p className="inf">+8801533694189</p>
            </div>
          </div>
        </div>


        {/* ref={form} onSubmit={sendEmail} */}
        <div id="mycontacts">

          <form className="contactform" ref={form} onSubmit={sendEmail} >
            <input type="text" className="name" placeholder='Name' name='from_name' />
            <input type="email" className="email" placeholder='Email' name='from_email' />
            <input type="Phone" className="phone" placeholder='Phone' name='from_phone' />
            <textarea rows="5" placeholder='Your Message' className="msg" name="message" />
            <button className="submitbtn" type='submit' value='Send' >Submit</button>

          </form>

        </div>

      </div>




    </div>
  )
}

export default Contact;