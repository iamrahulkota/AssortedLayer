import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

function HomeLayout({children}) {
  return (
        <div className='h-screen flex flex-col justify-between bg-[#0d0d0d] text-white font-Roboto'>
            <div className='w-10/12 mx-auto'>
                <Header />
                {children}
                <Footer />
            </div>
        </div>
  )
}

export default HomeLayout