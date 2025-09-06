import React, { useState } from 'react'
import { Sparkles,FileText  } from 'lucide-react'

const Reviewresume = () => {
  
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
            <h1 className='text-xl '>Resume Review</h1>
          </div>
          <p className='mt-6 text-sm font-bold'>Upload Resume</p>
          <input onChange={(e) => setInput(e.target.files[0])} type="file" accept='application/pdf' className='mt-4 text-xs p-3 px-3 w-full outline-none border border-[#819877] rounded-xl' required />

          <p className='text-xs mt-1'>Supports PDF, PNG, JPG formats</p>

            <button className='bg-[#819877] flex text-sm gap-2 px-4 py-2 mt-6 items-center justify-center w-full text-white rounded-full cursor-pointer'>
            <FileText  className='text-white w-5' /> Review Resume
            </button>
          </form>
    
          {/* right col */}
          <div className='bg-[#97AF8F] w-full max-w-lg p-4 rounded-lg border border-[#819877] min-h-96 flex flex-col max-h-[600px]'>
            <div className='flex items-center gap-3 text-[#BFDBFE]'>
              <FileText  className='w-5 h-5' /> 
              <h1 className='text-xl '>Analysis Results</h1>
            </div>
    
            <div className='flex-1 flex justify-center items-center'>
              <div className='flex flex-col text-sm items-center gap-5 text-[#BFDBFE]'>
                <FileText  className='w-9 h-9 ' />
                <p className='font-libre text-xs'>Upload your resume and click "Review Resume" to get started</p>
              </div>
            </div>
    
          </div>
        </div>
  )
}

export default Reviewresume