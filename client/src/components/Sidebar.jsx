import { useUser,useClerk, Protect } from '@clerk/clerk-react';
import { ClipboardPen, House,Hash, Image,PenLine, Users, LogOut } from 'lucide-react';
import React from 'react'
import { NavLink } from 'react-router-dom';

const navItems = [
  {to: '/ai' , label: 'Dashboard',Icon:House},
  {to: '/ai/write-article' , label: 'Write Article',Icon:ClipboardPen},
  {to: '/ai/blog-title' , label:'Blog Titles',Icon:Hash},
  {to: '/ai/generate-images' , label: 'Generate Images',Icon: Image},
  {to: '/ai/review-resume' , label: 'Review Resume',Icon: PenLine},
  {to: '/ai/community' , label: 'Community',Icon: Users},
  
]

const Sidebar = ({sidebar,setSidebar}) => {

  const {isLoaded,isSignedIn,user}= useUser();
  const {signOut,openUserProfile} = useClerk();

  return (
    <div className= {`w-60 h-full flex flex-col  justify-between items-center ${sidebar ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out border-r border-[#819877]`}>
     
      <div className='w-full my-5'>
      { isLoaded && isSignedIn && (
      <>
      <img src= {user.imageUrl} alt="" className='w-13 rounded-full mx-auto'></img>
      <h1 className=' text-[#819877] text-center mt-1 font-libre font-bold'>{user.fullName}</h1>
      <div className='px-5 mt-5 tex-sm text-[#819877]'>
        {navItems.map(({to,label,Icon}) =>(
          <NavLink key={to} to={to} end={to === '/ai'} onClick={() => setSidebar(false)} className={({isActive})=>`px-3.5 py-2.5 flex items-center gap-3 rounded text-[15px] font-libre ${isActive ? 'bg-[#97AF8F] text-white':""} `}
          >
            <Icon className= "w-4 h-4"/>
            {label}
          </NavLink>
        ))}
      </div>
      </>)}
      </div>

      <div className='w-full border-t border-[#819877] p-4 px-7 flex items-center justify-between'>
        <div className='flex items-center justify-center gap-3 cursor-pointer' onClick={openUserProfile}>
        <img src={user.imageUrl} className='w-8 rounded-full' />
        <div>
          <h1 className='text-md text-[#819877]'>{user.fullName}</h1>
          <p className='text-xs font-libre'>
            <Protect plan='premimum' fallback="Free" >Premium </Protect>
            Plan
          </p>
        </div>
        </div>
        <LogOut onClick={signOut} className='w-4.5 text-[#819877] cursor-pointer'/>
      </div>
    </div>
  )
}

export default Sidebar