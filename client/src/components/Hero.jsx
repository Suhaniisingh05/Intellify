import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-cover bg-no-repeat min-h-screen" style={{backgroundImage: `url(${assets.background})`}}>
      <div className='text-center mb-6'>
        <h1 className='text-3xl sm:text-5xl md: text-6xl 2xl:text-7xl mx-auto text-[#819877] leading-[1.2]'>Create amazing content<br/>with AI tools</h1>
        <p className='font-libre mt-5 max-w-xs s:max-w-lg 2xl:max-w-xl m-auto'>Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.</p>
      </div>

      <div onclick={() => navigate('/ai')} className='flex flex-wrap justify-center gap-5  mt-5 font-libre text-sm'>
        <button className='bg-[#819877] px-7 py-4 rounded-lg text-white hover:bg-[#6B8163] hover:scale-102 active:scale-95 transition	cursor-pointer'>Start creating now</button>
        <button className='bg-[#FFFFFF] px-7 py-4 rounded-lg text-black hover:scale-102 active:scale-95 transition	cursor-pointer'>Watch demo</button>
      </div>

      <div className='flex items-center justify-center gap-3 mt-8 text-[#819877]'>
        <img src= {`${assets.usergroup}`} alt= "" className='h-8 '/> Trusted by 10k+ people
      </div>
</div>
  )
}

export default Hero