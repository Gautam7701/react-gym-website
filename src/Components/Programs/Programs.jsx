import React from 'react'
import "./Programs.css"
import dumbell from "../../assets/dumbell.png"
import rightArrow from "../../assets/rightArrow.png"
import running from "../../assets/runing.png"
import flame from "../../assets/flame.svg"
import hearthealth from "../../assets/heartHealth.svg"

const Programs = () => {
  return (
    <div className="programs">
        <div className="program-header">
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
    <div className="programs-categories">
        <div className="first-category">
            <img src={dumbell}alt="" className='image' height={50} />
            <div className="content">
            <span  className='heading'>Strength Training</span>
            <span className='about'><br />In this program,you are trained <br />to improve your strength through <br />many exercises.</span>
            <div className="join1">
                <span >Join now</span>
                <img src={rightArrow} alt="" height={20}/>
            </div>
            </div>
        </div>
        <div className="second-category">
            <img src={running} alt="" className='image' height={50} />
            <div className="content">
            <span className='heading'>Cardio Training</span>
            <span className='about'><br />In this program,you are trained <br />to do sequential moves in range <br /> of 20 util 30 minutes.</span>
            <div className="join1">
                <span>Join now</span>
                <img src={rightArrow} alt="" height={20}/>
            </div>
            </div>
        </div>
        <div className="third-category">
            <img src={flame} alt="" className='image'height={50} />
            <div className="content">
            <span className='heading'>Fat Burning</span>
            <span className='about'><br />This program is suitable for you <br />who wants to get rid of your fat <br /> and lose their weight.</span>
            <div className="join1">
                <span>Join now</span>
                <img src={rightArrow} alt="" height={20}/>
            </div>
            </div>
        </div>
        <div className="fourth-category">
            <img src={hearthealth} alt="" className='image' height={50}/>
            <div className="content">
            <span className='heading'>Health Fitness</span>
            <span className='about'><br />This program is designed for <br />those who exercises only for <br />their body fitness not body <br />building</span>
            <div className="join1">
                <span>Join now</span>
                <img src={rightArrow} alt="" height={20} />
            </div>
            </div>
        </div>
    </div>

        
    </div>
  )
}

export default Programs
