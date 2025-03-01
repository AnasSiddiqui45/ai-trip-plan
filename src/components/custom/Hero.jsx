import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center justify-center mx-56 mt-10 gap-9'>
      <h1
      className='font-extrabold text-[50px] text-center'
      ><span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span><br></br>Personalized Itineraries at Your Fingertips</h1>
      <p className='text-xl text-center text-gray-500'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>

      <Link to={'/create-trip'}>
        <Button >Get Started, It's Free</Button>
      </Link>
      
    </div>
  
  )
}

export default Hero
