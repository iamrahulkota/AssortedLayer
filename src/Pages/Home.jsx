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
        heading: "Awwwards",
        description: "Awwwards showcase and award websites that demonstrate exceptional design, innovation, and user experience. The platform features a collection of websites that are evaluated by a panel of judges based on criteria such as design, creativity, usability, and content.",
        category: "Inspiration",
        imgUrl : "https://www.psdcenter.com/wp-content/uploads/2017/03/Awwwards.jpg",
        tags: ["Frontend", "Web Design", "UI/UX"],
        websiteUrl : "https://www.awwwards.com/"
    },
    {
      heading : "Codrops",
      description : "Keeping web professionals inspired & up-to-date since 2009",
      category : "Inspiration",
      imgUrl : "https://www.psdcenter.com/wp-content/uploads/2017/03/Awwwards.jpg",
      tags: ["Frontend", "Web Design", ],
      websiteUrl : "https://tympanus.net/codrops/"
    },
    {
      heading : "Curated.design",
      description : "Unleash your creativity with out-of-this-world web design inspiration from across the web.",
      category : "Inspiration",
      imgUrl : "https://www.psdcenter.com/wp-content/uploads/2017/03/Awwwards.jpg",
        tags: ["Web Design", "UI/UX"],
        websiteUrl : "https://www.curated.design/"
    },
    {
      heading : "Dark Mode Design",
      description : "Dark Mode Design is a showcase of beautifully designed and inspiring dark mode websites. Dim the lights, lower your screen brightness, and enjoy.",
      category : "Inspiration",
      imgUrl : "https://www.psdcenter.com/wp-content/uploads/2017/03/Awwwards.jpg",
      tags: ["Frontend", "Web Design", "UI/UX"],
      websiteUrl : "https://www.darkmodedesign.com/"
    },
    {
      heading : "Doing Cool Stuff",
      description : "A directory of brand, motion and digital product design studios doing cool stuff.",
      category : "Inspiration",
      imgUrl : "https://www.psdcenter.com/wp-content/uploads/2017/03/Awwwards.jpg",
      tags: ["Web Design", "UI/UX"],
      websiteUrl : "https://www.doingcoolstuff.xyz/"
    },
    {
      heading : "Footer.design",
      description : "Footer is a curated gallery of the top website footer inspiration on earth. Find the footers you need and sort by type and style.",
      category : "Inspiration",
      imgUrl : "",
      tags: ["Web Design", "UI/UX"],
      websiteUrl : "https://www.footer.design/"
    },
    {
      heading : "Godly",
      description : "Astronomically good web design inspiration from all over the internet",
      category : "Inspiration",
      imgUrl : "",
      tags: ["Frontend", "Web Design", "UI/UX"],
      websiteUrl : "https://godly.website/"
    },
    {
      heading : "Minimal.Gallery",
      description : "For the love of beautiful, clean and functional websites.",
      category : "Inspiration",
      imgUrl : "",
      tags: ["Frontend", "Web Design", "UI/UX"],
      websiteUrl : "https://minimal.gallery/"
    },
    {
      heading : "Mobbin",
      description : "Browse and search across thousands of Web UI elements for UI & UX research.",
      category : "Inspiration",
      imgUrl : "",
      tags: ["Web Design", "UI/UX"],
      websiteUrl : "https://mobbin.com/browse/web/ui-elements"
    },
    {
      heading : "Refero.design",
      description : "",
      category : "Inspiration",
      imgUrl : "",
      tags: ["Frontend","Web Design", "UI/UX"],
      websiteUrl : ""
    },
    {
      heading : "Stack Sorted",
      description : "Find Inspiration in Design Elements. Collection of the web's best designs sorted by elements. Choose an element and view projects/websites with creative designs for it.",
      category : "Inspiration",
      imgUrl : "",
      tags: ["Web Design", "UI/UX"],
      websiteUrl : "https://stacksorted.com/buttons"
    },
    {
    heading : "Stack Sorted",
    description : "Find Inspiration in Design Elements. Collection of the web's best designs sorted by elements. Choose an element and view projects/websites with creative designs for it.",
    category : "Inspiration",
    imgUrl : "",
    tags: ["Web Design", "UI/UX"],
    websiteUrl : "https://stacksorted.com/buttons"
    },
    {
    heading : "Startup Websites",
    description : "Extraordinary websites from startups across the universe.Explore how the top 1% leverage design to stand out.",
    category : "Inspiration",
    imgUrl : "",
    tags: ["Web Design", "UI/UX"],
    websiteUrl : "https://www.startupwebsites.co/"
    },
    {
      heading : "Storefront Design",
      description : "Explore a curated collection of unique ecommerce storefronts updated every Friday. Use advanced filters to find design inspirations that match your preferences, or submit your site to be featured among the best. Updated weekly with fresh design",
      imgUrl : "",
      tags: ["Web Design", "UI/UX"],
      websiteUrl : "https://www.storefront.design/"
    },
    
    {
      heading : "Atipo Foundry",
      description : "An independent digital typeface foundry and graphic design studio.",
      category : "Typography",
      imgUrl : "https://www.psdcenter.com/wp-content/uploads/2017/03/Awwwards.jpg",
      tags: ["Web Design", "UI/UX"],
      websiteUrl : "https://www.doingcoolstuff.xyz/"
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
            <Card heading={item?.heading} description={item?.description} category={item?.category} imgUrl={item?.imgUrl} tags={item?.tags} websiteUrl={item?.websiteUrl}/>
          ))}
          
        </div>

    </HomeLayout>
  )
}

export default Home

// 