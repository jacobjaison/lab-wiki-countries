import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
        <NavLink to='/' className={({isActive}) => isActive ? 'selected' :''}>Home</NavLink>
        <NavLink to='/countries' className={({isActive}) => isActive ? 'selected' :''}>Countries</NavLink>
    </nav>
      
    
  )
}
