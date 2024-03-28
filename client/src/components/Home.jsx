import React from 'react'
import Button from './Button'

const Home = () => {
  return (
    <div className='w-full h-screen flex p-9 pt-12'>
      <div className="home w-2/3 h-full pt-24">
        <h1 className='text-6xl'>Unlocking Education:</h1>
        <h2 className='text-6xl'>Your Free Learning Journey</h2>
        <p className='text-2xl mt-5'>&quot;Empower Your Mind: Free Education Hub - Dive Into Limitless Learning Opportunities </p> <p className='text-2xl'>Expert Guidance, and Enriching Resources Now!&quot;.</p>
        <Button />
      </div>
      <div className='w-1/3 h-full'>
          <div className='heroimage w-full h-full rounded-bl-[150px]'>

          </div>
      </div>
    </div>
  )
}

export default Home
