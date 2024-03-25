import React from 'react'
import "./ChooseUs.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import tick from "../../assets/tick.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"

const ChooseUs = () => {
  return (
    <div className="reasons">
        <div className="left-r">
          <img className='image1' src={image1} alt="" />
          <img className='image2' src={image2} alt="" />
          <img className='image3' src={image3} alt="" />
          <img className='image4' src={image4} alt="" />
        </div>
        <div className="right-r">
          <div className="some-reasons">
            Some Reasons
          </div>
            <div className="heading-choose">
              <span className='stroke-text'>why</span>
              <span>choose us</span>
            </div>
            <div className="reason">
              <span> <img src={tick} alt="" height="30rem"/> over 140+ espert coachs</span>
              <span> <img src={tick} alt="" height="30rem"/> train smarter and faster than before</span>
              <span> <img src={tick} alt="" height="30rem"/>1 free program for new member</span>
              <span> <img src={tick} alt="" height="30rem"/> Reliable partners</span>
            </div>
            <div className="partners">
              <span>Our partners</span>
              <div className="logo-images">
              <img src= {nb}alt="" />
              <img src={adidas} alt="" />
              <img src={nike} alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs
