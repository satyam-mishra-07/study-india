import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex'>
      <div className="logo">
        <h2>Study India</h2>
      </div>
      <div className="navItems">
        <ul>
            <li>Home</li>
            <li>Practice</li>
            <li>Contact</li>
            <li>About</li>
        </ul>
      </div>
    </nav>
  )
}
