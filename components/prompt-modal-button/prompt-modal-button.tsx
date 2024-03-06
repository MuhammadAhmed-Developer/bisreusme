import React from 'react'

function PromptModalButton({catagory} : {catagory:string}) {
  return (
    <div className='px-[16px] text-[14px] cur font-medium py-[4px] leading-[24px] text-primary-blue bg-[#EAF1FC] rounded-full'>{catagory}</div>
  )
}

export default PromptModalButton