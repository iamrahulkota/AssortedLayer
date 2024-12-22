import React from 'react'
import angle60degArrow from "../../Images/angle60degArrow.png"

function Card({id, title, description, link, category, tags, bannerImage}) {

  const handleBlogView = () => {
    window.open(link, '_blank')
  }

  return (
    <>
      <div class="max-w-[360px] bg-[#121212] border border-white border-opacity-10 hover:border-opacity-30 rounded-2xl">
            <img class="rounded-t-2xl " src={bannerImage} alt="aceternity" />
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
            <p class="mb-3 font-normal text-gray-400 line-clamp-3">{description}</p>
            <ul className='bg-[#121212] mt-6 flex gap-2 w-fit rounded-full text-white font-medium'>{tags.map(item => 
              <li>{item}</li>
            )}</ul>
            <div className='py-2 flex gap-2 w-full rounded-full text-white font-semibold justify-end '>
              <img className='w-[40px] h-[40px] hover:opacity-80 transition-all duration-300 cursor-pointer active:scale-90' src={angle60degArrow} onClick={handleBlogView} />
            </div>
        </div>

      </div>

    </>
  )
}

export default Card