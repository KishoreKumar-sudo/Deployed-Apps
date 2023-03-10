import React from 'react'
import './Navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai' 
import {BsFacebook} from 'react-icons/bs' 
import {AiOutlineTwitter} from 'react-icons/ai' 
import {AiFillYoutube} from 'react-icons/ai' 
import {AiFillInstagram} from 'react-icons/ai' 
const Navbar = () => {
  return (
    <div>
      <div className="header flex">
        <div className="logoDiv">
          <h3 className="logo">Wonder</h3>
        </div>
        <div className="menuDiv">
          <ul className="menuLists">
            <li className="navItem">
              <a href="#" className="menuLinks">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLinks">About Us</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLinks">Our Tours</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLinks">Gallery</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLinks">Blog</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLinks">Contact Us</a>
            </li>
            <li className="navItem">
              <a href="#" className="menuLinks">Pages</a>
            </li>
          </ul>
          <div className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>
        <div className="socialIcon Flex">
          <BsFacebook/>
          <AiOutlineTwitter/>
          <AiFillYoutube/>
          <AiFillInstagram/>
        </div>
      </div>
    </div>
  )
}

export default Navbar