import React, { useState } from 'react'
import { Sparkles,Edit } from 'lucide-react'

const Writearticle = () => {

  const articleLength = [
    {Length: 800, text:'Short(500 - 800 words)'},
    {Length:1200, text: 'Medium (800-1200 words)'},
    {Length: 1600, text: 'Long (1200+ words)'}
  ]

  const [selectedLength ,setSelectedLength] = useState(articleLength[0]);
  const [input,setInput] = useState('');
  const onSubmitHandler = async(e) => {
    e.preventDefault();
  }

  return (
    <div className='h-full overflow-y-scroll flex items-start p-6 flex-wrap gap-4'>
      {/* form col */}
      <form onSubmit={onSubmitHandler} className='bg-[#EACDD1] w-full max-w-lg p-4 rounded-lg border border-[#819877] font-libre'>
      <div className='flex items-center gap-3 font-sans'>
        <Sparkles className='w-6 text-[#E549A3]'/>
        <h1 className='text-xl '>AI Article Writer</h1>
      </div>
      <p className='mt-6 text-sm font-bold'>Article Topic</p>
      <input onChange={(e) => setInput(e.target.value)} value={input} className='mt-2 text-sm p-2 px-3 w-full border border-[#819877] rounded-xl' placeholder='The future of artificial intelligence' required />

      <p className='mt-5 text-sm font-bold'>Article Length</p>
      
      <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
        {articleLength.map((item ,index) => (
          <span className={`text-xs border border-[#819877] px-4 py-1 rounded-full cursor-pointer ${selectedLength.text == item.text ?' bg-[#819877] text-white' : ''}`} onClick={() => setSelectedLength(item)} key={index}>{item.text}</span>
        ))}
      </div>
      <br/>

        <button className='bg-[#819877] flex text-sm gap-2 px-4 py-2 mt-6 items-center justify-center w-full text-white rounded-full cursor-pointer'>
        <Edit className='text-white w-5' /> Generate article
        </button>
      </form>

      {/* right col */}
      <div className='bg-[#97AF8F] w-full max-w-lg p-4 rounded-lg border border-[#819877] min-h-96 max-h-[600px] flex flex-col'>
        <div className='flex items-center gap-3 '>
        <Edit className='w-5 h-5 text-white' /> 
        <h1 className='text-xl text-[#EACDD1]'>Generated article</h1>
        </div>

        <div className='flex-1 flex justify-center items-center'>
          <div className='flex flex-col text-sm items-center gap-5 text-[#EACDD1]'>
            <Edit className='w-9 h-9 ' />
            <p className='font-libre text-xs'>Enter a topic and click “Generate article ” to get started</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Writearticle