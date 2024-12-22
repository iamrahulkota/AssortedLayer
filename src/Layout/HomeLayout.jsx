import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
// import Meteors from "@/Components/ui/meteors";

function HomeLayout({children}) {
  return (
    // <div className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden bg-[#0d0d0d] text-white">
      // <Meteors number={30} />
        <div className='w-100 flex flex-col justify-between bg-[#0d0d0d] text-white font-Roboto'>
            <div className='w-5/6 mx-auto'>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
  )
}

export default HomeLayout