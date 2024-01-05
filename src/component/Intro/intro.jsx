import React from 'react'
import './intro.css'
import bg from '../../assets/backgroung2.png'
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Sathish</span><br />FrontEnd Developer</span>
                <p className='intropara'>I'm a skilled FullStack Developer with experinece in creating <br/> visually appealing and user-friendly Website.</p>
                <Link><button className="btn"><img src={btnImg} alt="logo" className='btnImg'/>Hire me</button></Link>
            </div>
            <img src={bg} alt="Profile" className='bg' />
        </section>
  )
}

export default Intro