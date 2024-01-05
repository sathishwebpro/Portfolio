import React from 'react'
import './skill.css'
import WebDesign from '../../assets/website-design.png'
import Backend from '../../assets/ui-design.png'

const Skill = () => {
  return (
    <section id="skill">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer and web developer with a experience in creatin visually 
        appealing and user friendly website.i have a strong understanding of design and a keen eye for detail.i am proficient in FrontEnd HTML, CSS, Javascript, ReactJS And Backend Java, J2EE, MySql.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={WebDesign} alt="Front-End Designer" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>FrontEnd Designer</h2>
                </div>
            </div>
            <div className="skillBar">
                <img src={Backend} alt="Backend Developer" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Backend Developer</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill