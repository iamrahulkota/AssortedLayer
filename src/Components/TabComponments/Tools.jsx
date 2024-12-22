import React from 'react'
import Card from '../Card/Card'
import { ToolsData } from "../ConentDetails/ToolsData"

function Tools() {
  return (
    <div className='flex flex-wrap gap-8 mt-24 justify-center'>
      {ToolsData.length > 0 && ToolsData?.map(item => 
          <Card key={item?.id} {...item} />
      )}
    </div>
  )
}

export default Tools