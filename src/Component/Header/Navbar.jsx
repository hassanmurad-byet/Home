import React, { useState } from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';
// import logo from './navimg/logo.png';

import { LiaHomeSolid } from "react-icons/lia";
import { CgPlayPauseR } from "react-icons/cg";
import { GoFileSymlinkFile } from "react-icons/go";
import { TbArrowsLeftRight } from "react-icons/tb";
import { FaBlog } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";






const Navbar = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);



    const menuItem = [
        {
            path: '/',
            name: "Home",
            icon: <LiaHomeSolid />
        },
        {
            path: '/about',
            name: "About",
            icon: <CgPlayPauseR />
        },
        {
            path: '/portfolio',
            name: "Portfolio",
            icon: <GoFileSymlinkFile />
        },
        {
            path: './client',
            name: "Client",
            icon: <TbArrowsLeftRight />
        },
        {
            path: '/blog',
            name: "Blog",
            icon: <FaBlog />
        },
        {
            path: '/contact',
            name: "Contact",
            icon: <LuMessagesSquare />


            // <TiMessages />
        }

    ]



    return (
        <div className='navcontainer'>

            {/* 
style={{ marginLeft: isOpen ? "50px" : "0px" }} */}
         <label>
            <input type="checkbox" className='myinputs' onClick={toggle} />
            <div className='bars'   >
                <span className="top_line common"></span>
                <span className="middle_line common"></span>
                <span className="bottom_line common"></span>
            </div>

            <div className="sidebar" style={{ width: isOpen ? "250px" : "50px" }} >
              
                {/* <img src={logo} alt="" className="logo" style={{ display: isOpen ? "block" : "none" }} /> */}
                <div className="alllinks">
                    {
                        menuItem.map((item, index) => (
                            <NavLink to={item.path} key={index} className="link" activeclassName='active'>
                                <div className='vabicon'  >{item.icon}</div>
                                <div style={{ display: isOpen ? "block" : "none" }} className='link-text'>
                                    <p className="inktxt"> {item.name}  </p>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
                <div className="foottxt" style={{ display: isOpen ? "block" : "none" }}>
                    <p className="foot" >©2021 Hassan <br />
                        Created By HassanMurad. </p>
                </div>
            </div>



            <main>{children}</main>

            </label>
        </div>
    )
}

export default Navbar;