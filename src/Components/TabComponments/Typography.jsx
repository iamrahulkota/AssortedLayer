import React from 'react'
import { TypographyData } from "../../Components/ConentDetails/TypographyData"
import Card from '../Card/Card'

function Typography() {
  return (
    <div className='flex flex-wrap gap-8 mt-24 justify-center'>
        {TypographyData.length > 0 && TypographyData?.map(item => 
          <Card key={item?.id} {...item} />
      )}
    </div>
  )
}

export default Typography