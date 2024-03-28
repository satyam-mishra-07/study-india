import React from 'react'
import Button from './Button'

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <div className="home w-2/3 h-full pt-16 pl-16">
        <h1 className='text-6xl'>Unlocking Education:</h1>
        <h2 className='text-6xl'>Your Free Learning Journey</h2>
        <p className='text-2xl mt-5'>&quot;Empower Your Mind: Free Education Hub - Dive Into Limitless Learning Opportunities </p> <p className='text-2xl'>Expert Guidance, and Enriching Resources Now!&quot;.</p>
        <Button />
      </div>
      <div className='w-1/2 h-full'>

      </div>
    </div>
  )
}

export default Home
