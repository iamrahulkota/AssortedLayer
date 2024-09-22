import React from 'react'

function Card({heading, description, category, imgUrl, tags}) {
  return (
    <>
        <div className='bg-[#121212] w-[372px] h-[550px] my-4 mx-3 flex flex-col justify-between border-4 border-[#878787] border-opacity-10 rounded-3xl hover:cursor-pointer hover:border-opacity-50'>
            <div className='my-auto px-10'>
                <img src={imgUrl} alt={heading} className='rounded-xl'/>
            </div>
            <div className='px-10 py-5 bg-black bg-opacity-20 rounded-b-3xl'>
                <h1 className='font-medium text-3xl text-white'>{heading}</h1>
                {/* <p className='flex gap-5'>{tags}</p> */}
                <div className='flex gap-2 mt-1 text-white text-opacity-50'>
                  {tags?.map((item) => <p>{item}</p>)}
                </div>
                <div className='bg-white py-2 px-8 w-fit rounded-full text-black font-semibold mt-5'>{category}</div>
            </div>
        </div>
    </>
  )
}

export default Card