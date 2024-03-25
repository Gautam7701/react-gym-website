import React from 'react'
import Logo from "../../assets/Logo.avif"
import "./Header.css"
import menu from "../../assets/Menu.png"
import { useState } from "react"
import { Link } from "react-scroll"


const Header = () => {
  const [showMenu, setshowMenu] = useState(false)
  return (
    <>
    <div className="header">
        <img  className = "logo" src={Logo} alt="" />
        <ul className='header-menu'>
            <li className='linksitems'><Link activeClass="active" to="hero" spy={true} smooth={true} offset={-50} duration={500} className="linksinneritems" href="#">Home</Link></li>
            <li className='linksitems'><Link activeClass="active" to="programs" spy={true} smooth={true} offset={-60} duration={500} className="linksinneritems" href="#">Programs</Link></li>
            <li className='linksitems'><Link activeClass="active" to="reasons" spy={true} smooth={true} offset={-70} duration={500} className="linksinneritems" href="#">Why Us</Link></li>
            <li className='linksitems'><Link activeClass="active" to="plans" spy={true} smooth={true} offset={-50} duration={500} className="linksinneritems" href="#">Plans</Link></li>
            <li className='linksitems'><Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={-50} duration={500} className="linksinneritems" href="#">Testimonials</Link></li>
        </ul>
    </div>
    <div className='mainNav'>
    <img className='Menu' src={menu} alt="Menubar" style={{ height: "3rem", width: "3.5rem" }} onClick={() => { setshowMenu(!showMenu) }} />
        
    <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <ul className='lists'>
            <li className='listsitems'><Link activeClass="active" to="hero" spy={true} smooth={true} offset={-50} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>Home</Link></li>
            <li className='listsitems'><Link activeClass="active" to="programs" spy={true} smooth={true} offset={-60} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>Programs</Link></li>

            <li className='listsitems'><Link activeClass="active" to="reasons" spy={true} smooth={true} offset={-50} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>Why Us</Link></li>
            <li className='listsitems'><Link activeClass="active" to="plans" spy={true} smooth={true} offset={-5} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>Plans</Link></li>
            <li className='listsitems'><Link activeClass="active" to="testimonials" spy={true} smooth={true} offset={-50} duration={500} className="listsinneritems" href="#" onClick={() => { setshowMenu(false) }}>Testimonials</Link></li>
        </ul>
    </div>
    </div>
    </>


    
  )
}

export default Header
