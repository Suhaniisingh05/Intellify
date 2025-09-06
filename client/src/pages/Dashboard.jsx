import React, { useEffect,useState } from 'react'
import {dummyCreationData} from '../assets/assets.js'
import { Gem, Sparkles } from 'lucide-react';
import {Protect} from '@clerk/clerk-react'
import CreationItem from '../components/CreationItem.jsx';

const Dashboard = () => {

  const [creations,setCreations] = useState([]);
  
  const getDashboardData = async() =>
  {
    setCreations(dummyCreationData);
  }

  useEffect(() =>{
    getDashboardData()
  },[])

  return (
    <div className='h-full overflow-y-scroll p-6'> 
      {/* cards */}
      <div className='flex justify-start gap-4 flex-wrap' >
        {/* card 1 */}
        <div className='flex justify-between items-center w-72 p-4 px-6  border border-[#97AF8F] rounded-xl bg-[#BFDBFE]'>
          <div>
            <p className='text-sm'>Total Creations</p>
            <h2 className='text-xl'>{creations.length}</h2>
          </div>
            <div className='bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] w-10 h-10 rounded-xl flex justify-center items-center'>
              <Sparkles className='w-5 text-white' />
            </div>
        </div>
        {/* card 2 */}
        <div className='flex justify-between items-center w-72 p-4 px-6  border border-[#97AF8F] rounded-xl bg-[#EACDD1]'>
          <div>
            <p className='text-sm'>Plan Status</p>
            <h2 className='text-lg'>
              <Protect plan='premimum' fallback= "Free">Premimum </Protect>
            </h2>
          </div>
            <div className='bg-gradient-to-br from-[#FF61C5] to-[#9E53EE] w-10 h-10 rounded-xl flex justify-center items-center'>
              <Gem className='w-5 text-white' />
            </div>
        </div>
      </div> 
      
      <div className='space-y-3'>
        <p className='mt-6 mb-4 font-libre font-bold'>Recent Creations</p>
        {
          dummyCreationData.map((item) => <CreationItem key={item.id} item ={item} />)
        }
      </div>

    </div>
  )
}

export default Dashboard