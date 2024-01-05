import React from 'react'
import './contact.css'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin-icon.png'
import Github from '../../assets/github.png'


const Contact = ({contactRef}) => {
  return (
    <section ref={contactRef} id='ContactPage'>
        <div id='contact'>
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form action="" className="contactForm">
            <input type="text" className='name' placeholder='Your Name'/>
            <input type='email' className="email" placeholder='your email'/>
            <textarea className='msg' name="message"  rows="10" placeholder='Your Message'></textarea>
            <button type='sumbit' name='value' className="submitBtn">Sumbit</button>
            <div className="links">
            <img src={Instagram} alt="" className="link" />
            <img src={Linkedin} alt="" className="link" />
            <img src={Github} alt="" className="link" />
            </div>
        </form>
        </div>
    </section>
  )
}

export default Contact;