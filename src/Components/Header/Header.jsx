import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Images/AssortedLayerLogoWhite.png'

function Header() {
  return (
    <header>
        <nav className='flex justify-between py-6 md:py-10'>
          <div className='flex'>
            <Link to='/'>
              <img src={Logo} width='35px' className='mt-2 mr-5' />
            </Link>
            <Link to='/' className='uppercase font-bold text-5xl text-white hidden md:block'>AssortedLayer</Link>
          </div>
          <div>
            <Link to='/about' className='font-medium text-3xl text-white'>About</Link>
          </div>
        </nav>
          <div className='w-100 border bg-white opacity-15'></div>
    </header>
  )
}

export default Header