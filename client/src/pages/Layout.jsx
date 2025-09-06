import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import { X,Menu } from 'lucide-react';
import Sidebar from '../components/Sidebar.jsx'
import { useUser,SignIn } from '@clerk/clerk-react';

const Layout = () => {

  const navigate = useNavigate();
  const [sidebar,setSidebar] = useState(false);
  const {user} = useUser();

  return user ?(
    <div className='flex flex-col items-start justify-start h-screen bg-[#F6F6F6]'>
    <nav className='w-full border-b border-[#819877] border-0.8 max-h-19'>
      <div className='flex gap-4 items-center px-4 py-4 cursor-pointer' onClick={() => navigate('/')} >
             <img
              src={assets.logo}
              alt="logo"
              className="w-8 sm:w-10 xl:w-13"
            />
            <div className='text-l sm:text-2xl lg:text-3xl font-black mr-0 text-[#819877] '>Intellify</div>
      </div>
    </nav>
     {
        sidebar ? <X onClick={() => (setSidebar(false) )}  className='w-6 h-6 text-[#819877] sm:hidden '/> : <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-[#819877] sm:hidden'/> 
      }

      <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
        <div className='flex-1 bg-[#F4F7FB]'>
          <Outlet />
        </div>
      </div>
    </div>
  ):
  (
    <div className='flex justify-center items-center h-screen'>
      <SignIn />
    </div>
  )
}

export default Layout