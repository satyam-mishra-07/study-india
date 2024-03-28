import React from 'react'

export default function Navbar() {
  return (
    <nav className='flex w-full px-11 py-4 justify-between items-center'>
      <div className="logo">
        <h2 className='font-bold text-4xl text-[var(--primary-color)]'>Study India</h2>
      </div>
      <div className="navItems">
        <ul className='flex items-center gap-6 text-2xl'>
            <li>Home</li>
            <li>Practice</li>
            <li>Contact</li>
            <li>About</li> 
        </ul>
      </div>
    </nav>
  )
}
