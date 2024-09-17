import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
      <p className='font-black text-2xl'> Smart Trip Planner✈️</p>
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header
