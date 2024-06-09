import React from 'react'
import HomeLayout from '../Layout/HomeLayout'
import About from './About'

function Home() {
  return (
    <HomeLayout>

          <div className='my-36 text-[#878787] '>
              <h1 className='font-medium text-center mx-auto text-3xl leading-10 lg:leading-[70px] lg:text-6xl lg:w-2/4 '><span className='text-white'>Curated resources</span> for frontend developers and web designers</h1>
              <p className='mx-auto text-center text-lg lg:text-xl my-16'>Streamline Your Workflow & Cultivate Expertise, Access <br></br>
              a Collection of Handpicked Resources for Developers & Designers</p>
          </div>
        

        <div className='bg-[#121212] py-4 px-10 rounded-md flex'>
          <button>All</button>              
          <button>Tools </button>              
          <button>Resources</button>      
          <button>Technologies</button>      
          <button>Upskilling</button>      
          <button>Inspiration</button>      
        </div>
    </HomeLayout>
  )
}

export default Home