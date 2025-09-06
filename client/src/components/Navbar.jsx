import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import {useClerk,UserButton,useUser} from '@clerk/clerk-react'

const Navbar = () => {
    
  const navigate = useNavigate()
  const {user} = useUser()
  const {openSignIn} = useClerk();


  return (
    <div className="fixed z-10 bg-[url('/assets/intellify-bg.jpg')] bg-cover w-full h-20 py-3 px-4 sm:px-6  md:px-10 xl:px-12 xl:h-25 font-libre flex justify-between items-center ">
    <div className='flex gap-4 items-center'>
       <img
        src={assets.logo}
        alt="logo"
        className="w-8 sm:w-10 xl:w-13 cursor-pointer"
        onClick={() => navigate('/')}
      />
      <div className='text-[36px] font-black  mr-0 text-[#819877]'>Intellify</div>
    </div>
  {
    user ? <UserButton/> :
    (
      <button onClick={openSignIn} className="bg-[#819877] py-2 px-4 sm:px-5 md:text-base xl:py-2 xl:px-5 font-libre flex items-center gap-2 rounded-full text-sm cursor-pointer text-white hover:bg-[#6B8163] transition">
      Get Started
      <ArrowRight className="w-4 h-4" />
      </button>
    )
  }
  
</div>

  )
}

export default Navbar