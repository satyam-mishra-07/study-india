import React from 'react'

export default function Navbar() {
  return (
    <nav className='fixed flex w-full px-11 py-4 justify-between items-center'>
      <div className="logo">
        <h2 className='font-bold text-4xl text-[var(--primary-color)]'>Study India</h2>
      </div>
      <div className="navItems">
        <ul className='flex items-center gap-6 text-2xl font-semibold'>
            <li>Home</li>
            <li>Practice</li>
            <li>Contact</li>
            <li>About</li> 
            <li className='border-2 border-[#FBD601] rounded-full py-1 px-4'>Sign In</li> 
        </ul>
      </div>
    </nav>
  )
}
