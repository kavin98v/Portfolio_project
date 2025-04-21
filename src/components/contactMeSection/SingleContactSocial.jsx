import React from 'react'

function SingleContactSocial({Icon, link}) {
  return (
    <div className='text-xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center '>
        <a href={link} className='curser-pointer' target="_blank"><Icon/></a>
    </div>
  )
}

export default SingleContactSocial