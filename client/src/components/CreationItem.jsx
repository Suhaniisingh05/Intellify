import React,{useState} from 'react'
import Markdown from 'react-markdown';

const CreationItem = ({item}) => {

  const [expanded,setExpanded] = useState(false);

  return (
    <div className='p-4 max-w-5xl bg-[#97AF8F] text-sm rounded-lg cursor-pointer' onClick={() => setExpanded(!expanded)}>

      <div className='flex text-white justify-between items-center gap-4'>
        <div className=''>
          <h2>{item.prompt}</h2>
          <p className='text-[#64748B] text-xs font-libre'>{item.type} - {new Date(item.createdAt).toLocaleDateString()} </p>
        </div>
        <button className='border font-libre text-xs px-4 py-1 rounded-xl'>{item.type}</button>
      </div>
      {
        expanded && (
          <div>
            {item.type === 'image' ? (
              <div> 
                <img src= {item.content} alt="image"></img>
              </div>
            ) : (
              <div className='mt-3 font-libre text-xs h-full overflow-y-scroll'> 
                <div className='reset-tw'>
                  <Markdown>{item.content}</Markdown>
                </div>
              </div>
            )}
          </div>
        )
      }
    </div>
  )
}

export default CreationItem