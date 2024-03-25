import React from 'react'
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import github from "../../assets/github.png"
import logo from "../../assets/logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-section">
        <hr />
        <div className="footer">
            <a href="https://www.linkedin.com/in/gautam-gupta-b630aa248/"><img src={linkedin} alt="" height="30px"/></a>
            <a href="https://github.com/GautamCreates"><img src={github} alt="" height="30px"/></a>
            <a href="https://www.instagram.com/gautam_gup26/"><img src={instagram} alt="" height="30px"/></a>
        </div>
        <div className="logo-f">
            <img src={logo} alt="" />
        </div>
    </div>
  )
}

export default Footer
