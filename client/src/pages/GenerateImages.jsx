import React, { useState } from 'react'
import { Sparkles,Edit,Image } from 'lucide-react'

const GenerateImages = () => {

    const imageStyle = ['Realistic style','Ghibli style','Anime style','Cartoon style','Fantasy style','3D style','Portrait style'];
  
    const [selectedStyle ,setSelectedStyle] = useState('Realistic style');
    const [input,setInput] = useState('');
    const [publish,setPublish] = useState(false);

    // so on selecting does not reload th page
    const onSubmitHandler = async(e) => {
      e.preventDefault();
    }

  return (
   <div className='h-full overflow-y-scroll flex items-start p-6 flex-wrap gap-4'>
        {/* form col */}
        <form onSubmit={onSubmitHandler} className='bg-[#EACDD1] w-full max-w-lg p-4 rounded-lg border border-[#819877] font-libre'>
        <div className='flex items-center gap-3 font-sans'>
          <Sparkles className='w-6 text-[#E549A3]'/>
          <h1 className='text-xl '>AI Image Generator</h1>
        </div>
        <p className='mt-6 text-sm font-bold'>Describe Your Image</p>
        <textarea onChange={(e) => setInput(e.target.value)} value={input} rows={4} className='mt-2 text-sm p-2 px-3 w-full border border-[#819877] rounded-xl' placeholder='Describe what you want to see in the image..' required />
  
        <p className='mt-5 text-sm font-bold'>Style</p>
        
        <div className='mt-3 flex gap-3 flex-wrap sm:max-w-9/11'>
          {imageStyle.map((item) => (
            <span className={`text-xs border border-[#819877] px-4 py-1 rounded-full cursor-pointer ${selectedStyle == item ?' bg-[#819877] text-white' : ''}`} onClick={() => setSelectedStyle(item)} key={item}>{item}</span>
          ))}
        </div>
          
          {/* Toggle button */}
          <div className='my-6 flex items-center gap-2'>
          <label className='relative cursor-pointer'>
            <input type="checkbox" onChange={(e)=> setPublish(e.target.checked)} checked={publish} className='sr-only peer' ></input>

            <div className='w-9 h-5 bg-[#97AF8F] rounded-full peer-checked:bg-[#E549A3] transition'></div>

            <span className='absolute left-1 top-1 w-3 h-3 bg-[#EACDD1] rounded-full peer-checked:translate-x-4'></span>
          </label>
            <p className='text-xs font-libre'>Make this image Public</p>
          </div>

          <button className='bg-[#819877] flex text-sm gap-2 px-4 py-2 mt-6 items-center justify-center w-full text-white rounded-full cursor-pointer'>
          <Image className='text-white w-5' /> Generate image
          </button>
        </form>
  
        {/* right col */}
        <div className='bg-[#97AF8F] w-full max-w-lg p-4 rounded-lg border border-[#819877] min-h-96 max-h-[600px] flex flex-col'>
          <div className='flex items-center gap-3 text-[#EACDD1]'>
          <Image className='w-5 h-5' /> 
          <h1 className='text-xl'>Generated image</h1>
          </div>
  
          <div className='flex-1 flex justify-center items-center'>
            <div className='flex flex-col text-sm items-center gap-5 text-[#EACDD1]'>
              <Image className='w-9 h-9 ' />
              <p className='font-libre text-xs'>Describe an image and click "Generate Image" to get started</p>
            </div>
          </div>
  
        </div>
      </div>
  )
}

export default GenerateImages