import React from 'react'
import'./works.css'
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'


const Works = () => {
  return (
    <section id='works' >
        <h2 className="worksTittle">My Portfolio</h2>
        <span className="worksDesc">i take pride in paying attention to the smallest details and making sure that my work is pixel prefect. i am excited to bring my skills and expreicene to help business achieve their goals and create a strong online presence</span>
        <div className="WorksImgs">
            <img src={Portfolio1} alt="" className="WorksImg" />
            <img src={Portfolio2} alt="" className="WorksImg" />
            <img src={Portfolio3} alt="" className="WorksImg" />
            {/* <img src={Portfolio3} alt="" className="WorksImg" /> */}
        </div>
        <button className="worksbtn">See More</button>
    </section>
  )
}

export default Works