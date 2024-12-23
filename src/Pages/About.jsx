import React from 'react'
import HomeLayout from '../Layout/HomeLayout'

function About() {
  return (
    <HomeLayout>
      <div className='w-full h-[65vh] flex flex-col md:flex-row p-20'>
        <div className='w-6/12 '>
          <span className='font-medium'>About /</span>
          <h1 className='text-6xl text-[#878787] font-medium'>AssortedLayer</h1>
        </div>
        <div className='w-6/12 text-white/20 font-medium text-3xl'>
          <p className=''>I created AssortedLayer to solve the problems I faced when I started learning frontend development and web design. Searching for resources and tools took up a lot of valuable time that I could have used to improve my skills.
            <br></br><br></br>
            Now, AssortedLayer is here to help others with the same issues. These resources are carefully chosen by me and other great contributors.</p>  
        </div>
      </div>
      {/* <div className='w-full flex flex-col md:flex-row p-20'>
        <div className='w-6/12 '>
          <span className='font-medium'>About /</span>
          <h1 className='text-6xl text-[#878787] font-medium'>@iamrahulkota</h1>
        </div>
        <div className='w-6/12 text-white/20 font-medium text-3xl'>
            <p className=''>I created AssortedLayer to solve the problems I faced when I started learning frontend development and web design. Searching for resources and tools took up a lot of valuable time that I could have used to improve my skills.
              <br></br><br></br>
              Now, AssortedLayer is here to help others with the same issues. These resources are carefully chosen by me and other great contributors.</p>
        </div>
      </div> */}
    </HomeLayout>
  )
}

export default About