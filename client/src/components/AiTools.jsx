import React from 'react'
import { AiToolData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import {useUser} from '@clerk/clerk-react'

const AiTools = () => {

  const navigate = useNavigate();
  const {user} = useUser();

  return (
    <div className='px-4 sm:px-20 xl:px-32 my-24 mb-35'>
      <div className=' text-center'>
        <h2 className='text-[42px] text-[#819877]'>Powerful AI Tools</h2>
        <p className='font-libre text-[14px] xl:text-[16px] max-w-lg mx-auto mt-2'>Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.</p>
      </div>

      <div className='flex mt-10 justify-center flex-wrap [@media(min-width:1200px)]:flex-nowrap text-black'>
      {AiToolData.map((tool,index) =>
      (
        //card component
        <div key={index} onClick={() => user && navigate(tool.path)} className='bg-[#D2E6CA] hover:bg-[#ABC9A1] p-8 m-4 max-w-xs rounded-lg hover:text-white hover:-translate-y-1 transition text-[#819877]'> 
        <div className='flex items-center gap-4 mb-3 text-lg'>
          <tool.Icon className='w-12 h-12 p-3 rounded-3xl text-white' style= {{backgroundColor: `${tool.bg}`}}/>
         <h3>{tool.title}</h3>
        </div>
        <p className='font-libre text-[14px] max-w-[95%]'>{tool.description}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default AiTools