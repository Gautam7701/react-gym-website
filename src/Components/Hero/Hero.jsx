import React from 'react'
import Header from '../Header/Header'
import "./Hero.css"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"

const Hero = () => {
  return (
   <div className="hero">
    <div className="left-h">
        <Header/>
        <div className="the-best-add">
            <div></div>
            <span>the best fitness club in the town</span>
        </div>
        <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </div>
            <div>
                <span>Ideal Body</span>
            </div>
            <div className="span">
                In here we will help you to shape and build your ideal body and live up your life to fullest
            </div>
        </div>
        <div className="figures">
            <div>
                <span>+140</span>
                <span>expert coachs</span>
            </div>
            <div>
                <span>+778</span>
                <span>members joined</span>
            </div>
            <div>
                <span>+40</span>
                <span>Fitness Programs</span>
            </div>
        </div>
        <div className="hero-buttons">
            <button className='btn'>Get Started</button>
            <button className='btn'>Learn More</button>
        </div>
    </div>
    <div className="right-h">
    <button className='btn'>Join Now</button>

    <div className="heart-rate">
        <img src={Heart} alt="" />
        <span>Heart Rate</span>
        <span> 116 bpm</span>
    </div>
    <img src={hero_image} alt="" className='hero_image'/>
    <img src={hero_image_back} alt="" className='hero_image_back' />
    <div className="calories">
        <img src={Calories} alt="" />
        <div>
            <span>Calories Burned</span>
            <span>220 kCal</span>
        </div>
    </div>
    </div>
   </div>
  )
}

export default Hero
