import React from 'react'
import HomeLayout from '../Layout/HomeLayout'

function About() {
  return (
    <HomeLayout>
      <div className='w-full flex flex-col md:flex-row p-20'>
        <div className='w-6/12 '>
          <span className='font-medium'>About /</span>
          <h1 className='text-6xl text-[#878787] font-medium'>AssortedLayer</h1>
        </div>
        <div className='w-6/12 text-white/20 font-medium text-3xl'>
          <p className=''>I created Pillarstack to address the frustrations I encountered when I started out in frontend development and web design. Hunting for resources and tools consumed a lot valuable time that could have been better spent honing my skills.<br></br><br></br>Now Pillarstack exists to support those that have similar issues. These resources are handpicked and curated by me and other amazing contributors.</p>
        </div>
      </div>
      <div className='w-full flex flex-col md:flex-row p-20'>
        <div className='w-6/12 '>
          <span className='font-medium'>About /</span>
          <h1 className='text-6xl text-[#878787] font-medium'>AssortedLayer</h1>
        </div>
        <div className='w-6/12 text-white/20 font-medium text-3xl'>
          <p className=''>I created Pillarstack to address the frustrations I encountered when I started out in frontend development and web design. Hunting for resources and tools consumed a lot valuable time that could have been better spent honing my skills.<br></br><br></br>Now Pillarstack exists to support those that have similar issues. These resources are handpicked and curated by me and other amazing contributors.</p>
        </div>
      </div>
    </HomeLayout>
  )
}

export default About