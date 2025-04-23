import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

function ContactMain() {
  return (
    <div id="contact" className='max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4'>
         <h2 className='text-5xl text-cyan mb-10 text-center font-special  '> Contact Me</h2>
         <dev className="flex justify-between gap-24 bg-pureWhite/10 bg-transparent p-8 rounded-2xl lg:flex-row sm:flex-col">
            <ContactLeft/>
            <ContactRight/>
         </dev>
    </div>
  )
}

export default ContactMain  