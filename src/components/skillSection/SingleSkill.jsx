import React from 'react'

function SingleSkill({text, icon}) {
  return (
    <div className='hover:-translate-y-10 transition-all duration-500'>
      <div className='flex flex-col items-center gap-2 relative'>
        <div className='bg-white text-cyan text-6xl h-[100px] w-[100px] flex justify-center items-center rounded-full border-4 border-orange hover:text-darkGrey horver:scale-105 transform transition-all duration-500 '>{icon}</div>
        <p className='text-white font-bold'>{text}</p>
      </div>
      <div className='w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10  '></div>
    </div>
  )
}

export default SingleSkill