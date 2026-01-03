import React from 'react'
import ActivityLeftCard from './ActivityLeftCard'
import ActivityRightCard from './ActivityRightCard'

const ActivityTimeline = () => {
  return (
    <div className='px-4 grid grid-cols-12 gap-4'>
      <div className='col-span-8'>
        <ActivityLeftCard/>
      </div>
      <div className='col-span-4'>
        <ActivityRightCard/>
      </div>
    </div>
  )
}

export default ActivityTimeline