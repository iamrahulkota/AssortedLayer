import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className='my-14'>
        <div className='w-100 border bg-white opacity-15 my-10'></div>

        <div className='flex flex-col lg:flex-row lg:justify-between '>

          <div>
              <a href='https://www.instagram.com/iamrahulkota/' target="_blank" rel="noopener noreferrer" className='text-white font-medium text-base'>Made & Curated by @iamrahulkota</a>
          </div>

          <div className='md:flex font-medium'>

              <div className='px-6'>  
                  <Link to='/about' className='text-white py-1'>About</Link><br></br>
                  <Link to='' className='text-white py-1'>Support this project </Link>
              </div>  
              <div className='px-6'>  
                  <Link className='text-white py-1'>Add a resource</Link><br></br>
                  <a href='https://github.com/iamrahulkota/BlogApplication' target="_blank" rel="noopener noreferrer" className='text-white py-1'>Contribute on Github</a>
              </div>  
              <div className='px-6'>  
                  <Link to='' className='text-white py-1'>Submit feedback</Link><br></br>
                  <Link to='' className='text-white py-1'>Legal</Link>
              </div> 

          </div>

        </div>  

      </footer>
    </>
  )
}

export default Footer