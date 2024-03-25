import React, { useRef } from 'react'
import "./Join.css"
import emailjs from "@emailjs/browser"

const Join = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_kagk5ya', 'template_s408fas', form.current, {
            publicKey: '0TGK4fXrS5DoUOthF',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          form.current.reset();
      };
  return (
    <div className="join">
        <div className="left-j">
            <hr />
            <div className='upper'>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div className='lower'>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form}className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your Email address'/>
                <button type= "submit" className="btn-j">Join now</button>
            </form>
        </div>
    </div>
  )
}

export default Join
