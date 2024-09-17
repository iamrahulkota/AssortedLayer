import React, { useState } from 'react'
import HomeLayout from '../Layout/HomeLayout'
import About from './About'
import { useParams } from 'react-router-dom';
import Card from '../Components/Card/Card';

function Home() {

  const [selectedType, setSelectedType] = useState("All")

  const buttons = [
    { id: 1, name: 'All'},
    { id: 2, name: 'Tools'},
    { id: 3, name: 'Resources' },
    { id: 4, name: 'Technologies' },
    { id: 5, name: 'Upskilling' },
    { id: 6, name: 'Inspiration' },
    { id: 6, name: 'Typography' },
  ];

  console.log(buttons)

  const cardItems = [
    {
      heading : "Awwwards",
      description : "Awwwards showcase and award websites that demonstrate exceptional design, innovation, and user experience. The platform features a collection of websites that are evaluated by a panel of judges based on criteria such as design, creativity, usability, and content.",
      category : "Inspiration"
    },
    {
      heading : "Codrops",
      description : "Keeping web professionals inspired & up-to-date since 2009",
      category : "Inspiration"
    },
    {
      heading : "Curated.design",
      description : "Unleash your creativity with out-of-this-world web design inspiration from across the web.",
      category : "Inspiration"
    },
    {
      heading : "Dark Mode Design",
      description : "Dark Mode Design is a showcase of beautifully designed and inspiring dark mode websites. Dim the lights, lower your screen brightness, and enjoy.",
      category : "Inspiration"
    },
    {
      heading : "Atipo Foundry",
      description : "An independent digital typeface foundry and graphic design studio.",
      category : "Typography"
    },

  ]


  const handleClick = (BtnName)=>{
    setSelectedType(BtnName)
    console.log(BtnName)
  } 

  const filteredCards = selectedType === "All" ? cardItems : cardItems.filter(card => card.category === selectedType)


  return (
    <HomeLayout>

          <div className='my-24 text-[#878787] '>
              <h1 className='font-medium text-center mx-auto text-3xl leading-10 lg:leading-[70px] lg:text-6xl lg:w-2/4 '><span className='text-white'>Curated resources</span> for frontend developers and web designers</h1>
              <p className='mx-auto text-center text-lg lg:text-xl my-16'>Streamline Your Workflow & Cultivate Expertise, Access <br></br>
              a Collection of Handpicked Resources for Developers & Designers</p>
          </div>
        

        <div className='mx-auto bg-[#121212] py-4 px-10 rounded-lg flex w-full md:w-8/12 mb-24 flex-wrap'>
              {buttons.map((eachButton)=>(
                <button 
                  className={`mx-auto font-medium rounded-sm px-6 py-2 hover:bg-white hover:text-black 
                    ${selectedType === eachButton.name ? 'bg-white text-black' : 'text-white'}
                  `} 
                  key={eachButton.id} 
                  onClick={()=> handleClick(eachButton.name)}>
                  {eachButton.name}
                </button>
              ))}
        </div>
        

        <div className='flex flex-wrap justify-center'>
          {filteredCards.map((item)=>(
            <Card heading={item.heading} description={item.description} category={item.category} />
          ))}
          
        </div>

    </HomeLayout>
  )
}

export default Home

// 