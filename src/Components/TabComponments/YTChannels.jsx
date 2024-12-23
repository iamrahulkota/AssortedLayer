import React from 'react'
import { YTChannelsData } from "../../Components/ConentDetails/YTChannelsData"
import Card from '../Card/Card'

function YTChannels() {
  return (
    <div className='flex flex-wrap gap-8 mt-24 justify-center'>
        {YTChannelsData.length > 0 && YTChannelsData?.map(item => 
          <Card key={item?.id} {...item} />
      )}
    </div>
  )
}

export default YTChannels