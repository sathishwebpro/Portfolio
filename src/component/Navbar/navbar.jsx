import React, {useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import ContactImg from '../../assets/contact.png'
import {Link} from 'react-scroll'
import Menu from '../../assets/menu.png'

const Navbar = ({contactRef}) => {

  const [ShowMenu,setShowMenu ]=useState(false);
  
  return (
        <nav className="navbar" >
            <img src={logo} alt="logo" className='logo' />
            <div className="DesktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopItemMenu">Home</Link>
                <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className="desktopItemMenu">About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="desktopItemMenu">Portfolio</Link>
            </div>
            <button className="desktopbtn" onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', duration: 500, offset: 120, })}>
                <img  src={ContactImg} alt="" className="desktopMenuImg" />Contact me</button>

                <img src={Menu} alt="menu" className="mobMenu" onClick={()=>setShowMenu(!ShowMenu)} />
            <div className="NavMenu" style={{display: ShowMenu? 'flex':'none'}}> 
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="ListItemMenu" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className="ListItemMenu" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className="ListItemMenu" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="ListItemMenu" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
  )
}

export default Navbar;