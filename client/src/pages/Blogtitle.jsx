import React, { useState } from 'react'
import { Sparkles,Edit, Hash } from 'lucide-react'

const Blogtitle = () => {

  const blogCategories = ['General' ,'Technology','Business','Health', 'Lifestyle','Education', 'Travel','Food'];

  const [selectedCategory ,setSelectedCategory] = useState('General');
  const [input,setInput] = useState('');
  
  // so on selecting does not reload th page
  const onSubmitHandler = async(e) => {
    e.preventDefault();
  }

    return (
    <div className='h-full overflow-y-scroll flex items-start p-6 flex-wrap gap-4'>
      {/* form col */}
      <form onSubmit={onSubmitHandler} className='bg-[#BFDBFE] w-full max-w-lg p-4 rounded-lg border border-[#819877] font-libre'>
      <div className='flex items-center gap-3 font-sans'>
        <Sparkles className='w-6 text-[#60A5FA]'/>
        <h1 className='text-xl '>AI Title Generator</h1>
      </div>
      <p className='mt-6 text-sm font-bold'>Keyword</p>
      <input onChange={(e) => setInput(e.target.value)} value={input} className='mt-2 text-sm p-2 px-3 w-full border border-[#819877] rounded-xl' placeholder='The future of artificial intelligence' required />

      <p className='mt-5 text-sm font-bold'>Category</p>
      
      <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
        {blogCategories.map((item) => (
          <span className={`text-xs border border-[#819877] px-4 py-1 rounded-full cursor-pointer ${selectedCategory == item ?' bg-[#97AF8F] text-white' : ''}`} onClick={() => setSelectedCategory(item)} key={item}>{item}</span>
        ))}
      </div>
      <br/>

        <button className='bg-[#819877] flex text-sm gap-2 px-4 py-2 mt-6 items-center justify-center w-full text-white rounded-full cursor-pointer'>
        <Hash className='text-white w-5' /> Generate title
        </button>
      </form>

      {/* right col */}
      <div className='bg-[#97AF8F] w-full max-w-lg p-4 rounded-lg border border-[#819877] min-h-96 flex flex-col'>
        <div className='flex items-center gap-3 text-[#BFDBFE]'>
          <Hash className='w-5 h-5' /> 
          <h1 className='text-xl '>Generated titles</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='flex flex-col text-sm items-center gap-5 text-[#BFDBFE]'>
            <Hash className='w-9 h-9 ' />
            <p className='font-libre text-xs'>Enter keywords and click "Generate Titles" to get started</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Blogtitle