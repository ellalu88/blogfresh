import React from 'react'
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
         <img src={Logo} alt=""/>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=tech"><h6>TECH</h6></Link>
          <Link className="link" to="/?cat=design"><h6>DESIGN</h6></Link>
          <Link className="link" to="/?cat=web"><h6>WEB</h6></Link>
          <Link className="link" to="/?cat=software"><h6>SOFTWARE</h6></Link>
         <span>Ella</span>
         <span>Logout</span>
         <span className="write">
          <Link className="link" to="/write">Write</Link>
         </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar