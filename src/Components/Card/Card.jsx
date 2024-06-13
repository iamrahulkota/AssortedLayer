import React from 'react'

function Card({heading, description, category}) {
  return (
    <>
        <div className='bg-[#121212] p-5 w-[300px] h-96 my-4 mx-3'>
            <div className=''>

            </div>
            <div className=''>
                <h1 className='font-medium text-3xl text-white'>{heading}</h1>
                <p className=''>{description}</p>
                <p className=''>{category}</p>
            </div>
        </div>
    </>
  )
}

export default Card