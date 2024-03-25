import React from 'react'
import "./Testimonials.css"
import timage1 from "../../assets/t-image1.png"
import leftarrow from "../../assets/leftArrow.png"
import rightarrow from "../../assets/rightArrow.png"

const Testimonials = () => {
  return (
    <div className="testimonials">
        <div className="left-t">
            <span>Testimonials</span>
            <span className="stroke-text">What they</span>
            <span>say about us</span>
            <div className="testimonials-content">
            I made the right choice by choosing the Fitclub and by <br />chosing he right plan and program I already achieved my <br />ideal body!
        </div>
        <div className="person-info">
        <span className="name">Mathew Handrickson-</span>
            <span className="status">Enterpreneur</span>
        </div>
        </div>
        <div className="right-t">
            <div></div>
            <div></div>
            <img className='timage' src={timage1} alt="" />
           
        </div>
    </div>
  )
}

export default Testimonials
