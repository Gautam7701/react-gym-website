import React from 'react'
import "./Plans.css"
import img1 from "../../assets/heartHealth.svg"
import img2 from "../../assets/Premium.png"
import img3 from "../../assets/dumbell.png"
import whitetick from "../../assets/whiteTick.png"
import rightarrow from "../../assets/rightArrow.png"

const Plans = () => {
  return (
    <div className="plans">
        <div className="plans-heading">
            <span className='stroke-text'>Ready to start</span>
            <span>Your Journey</span>
            <span className='stroke-text'>Now withus</span>
        </div>
        <div className="plans-categories">
        <div className="first-plan">
            <img className= "plans-images" src={img1} alt=""/>
           <span className="heading-plans">Basic Plan</span>
           <div className="prize">$25</div>
           <div className="content-plans">
            <span><img src={whitetick}alt="" height="20px"/>2 hours of exercise</span>
            <span><img src={whitetick}alt="" height="20px"/>Free consulation to coaches</span>
            <span><img src={whitetick}alt="" height="20px"/>Access to the community</span>
           </div>
           <div className="plan-footer">
            See more benefits <img src={rightarrow} alt=""  height="20px" />
           </div>
           <button className='btn-plan'>Join now</button>
           </div>
        <div className="second-plan">
            <img className= "plans-images"  src={img2}alt="" height="30px" />
           <span className="heading-plans">premium Plan</span>
           <div className="prize">$30</div>
           <div className="content-plans">
            <span><img src={whitetick}alt="" height="20px" />5 hours of exercise</span>
            <span><img src={whitetick}alt="" height="20px"/>Free consulation of coaches</span>
            <span><img src={whitetick}alt="" height="20px"/>Access to minibar</span>
           </div>
           <div className="plan-footer">
            See more benefits <img src={rightarrow} alt=""  height="20px"/>
           </div>
           <button className='btn-plan'>Join now</button>
           </div>
        <div className="third-plan">
            <img  className= "plans-images" src={img3}alt="" />
           <span className="heading-plans">Pro Plan</span>
           <div className="prize">$45</div>
           <div className="content-plans">
            <span><img src={whitetick}alt="" height="20px" />8 hours of exercise</span>
            <span><img src={whitetick}alt="" height="20px" />Consulation of Private Coach</span>
            <span><img src={whitetick}alt="" height="20px" />Free Fitness Merchandises</span>
           </div>
           <div className="plan-footer">
            See more benefits <img src={rightarrow} alt=""  height="20px"/>
           </div>
           <button className='btn-plan'>Join now</button>
        </div>
    </div>
    </div>
  )
}

export default Plans
