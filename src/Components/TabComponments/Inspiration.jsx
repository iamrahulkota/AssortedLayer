import React from 'react'
import { InspirationData } from "../ConentDetails/InspirationData"
import Card from '../Card/Card'

function Inspiration() {
  return (
    <div className='flex flex-wrap gap-8 mt-24 justify-center'>
        {InspirationData.length > 0 && InspirationData?.map(item => 
          <Card key={item?.id} {...item} />
      )}
    </div>
  )
}

export default Inspiration