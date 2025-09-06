import React from 'react'
import {PricingTable} from '@clerk/clerk-react'

const Plan = () => {
  return (
    <div className='mx-auto max-w-2xl z-20 mb-35'>
      <div className='text-center' >
        <h2 className='text-center text-[45px] text-[#819877] mb-2'>Choose your plan </h2>
        <p className='font-libre text-[15px] mx-auto max-w-lg'>Start for free and scale up as you grow. Find the perfect plan for your content creation needs.</p>
      </div>

      <div className='mt-15'>
        <PricingTable />
      </div>

    </div>
  )
}

export default Plan