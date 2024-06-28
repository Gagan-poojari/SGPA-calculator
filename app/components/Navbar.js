import React from 'react'
import './Navbar.css'
import { IoMenuOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <div>
      <div className="cc-heading">
        <div className="cc-cgpa">CGPA</div>
        <div className="cc-calc">CALCULATOR</div>
      </div>
      <div className="cc-ham-burg"><IoMenuOutline /></div>
    </div>
  )
}

export default Navbar
