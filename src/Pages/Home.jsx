import React, { useEffect, useMemo, useState } from 'react'
import HomeLayout from '../Layout/HomeLayout'
import About from './About'
import { useParams } from 'react-router-dom';
import Card from '../Components/Card/Card';
import cardItems from '../Components/cardItems';
import Tools from '@/Components/TabComponments/Tools';
import BasicTabs from '@/Components/Tabs';
import Resources from '@/Components/TabComponments/Resources';
import Inspiration from '@/Components/TabComponments/Inspiration';
function Home() {

  // const [selectedType, setSelectedType] = useState("All")

  // const buttons = [
  //   { id: 1, name: 'All'},
  //   { id: 2, name: 'Tools'},
  //   { id: 3, name: 'Resources' },
  //   { id: 4, name: 'Technologies' },
  //   { id: 5, name: 'Upskilling' },
  //   { id: 6, name: 'Inspiration' },
  //   { id: 6, name: 'Typography' },
  // ];

  // console.log(buttons)



  // const handleClick = (BtnName)=>{
  //   setSelectedType(BtnName)
  //   console.log(BtnName)
  // } 

  // const filteredCards = selectedType === "All" ? cardItems : cardItems.filter(card => card.category === selectedType)

  const [value, setValue] = useState(0);

  

  const routingtabs = useMemo(() => [
    {
        label: "Tools",   
        content: <Tools />
    },
    {
        label: "Resources",
        content: <Resources />
    },
    {
      label: "Inspiration",
      content: <Inspiration />
    },
    {
      label: "Technologies",
      content: <>Technologies</>
    },
    {
      label: "Upskilling",
      content: <>Upskilling</>
    },  
    {
      label: "Typography",
      content: <>Typography</>
    },  
  ], []);


    useEffect(() => {
        routingtabs?.map((tab, i) => {
            if (location.pathname.split('/').includes(tab.label.toLowerCase())) {
                setValue(i)
            }
        })
    }, [routingtabs, location.pathname])


  return (
    <HomeLayout>

          <div className='my-24 text-[#878787] '>
              <h1 className='font-medium text-center mx-auto text-3xl leading-10 lg:leading-[70px] lg:text-6xl lg:w-2/4 '><span className='text-white'>Curated resources</span> for frontend developers and web designers</h1>
              <p className='mx-auto text-center text-lg lg:text-xl my-16'>Streamline Your Workflow & Cultivate Expertise, Access <br></br>
              a Collection of Handpicked Resources for Developers & Designers</p>
          </div>

          <BasicTabs
            value={value}
            setValue={setValue}
            tabData={routingtabs?.map((tab, i) => {
              return {
                  label: tab.label,
                  route: tab.label.toLowerCase(),
                  content: tab.content
              };
            })}
            tabStyle={{
                selectedBg: '#FFF',
                selectedColor: '#000',
                bg: '#000',
                width: "200px"
              }}
          />
      

    </HomeLayout>
  )
}

export default Home