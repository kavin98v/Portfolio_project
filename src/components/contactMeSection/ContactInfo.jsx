import React from 'react'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import SingleInfo from './SingleInfo';

function ContactInfo() {
  return (
    <div className='flex flex-col gap-4 text-pureWhite '>
        <SingleInfo text="kavindushalinda07@gmail.com" Image={MdOutlineMarkEmailUnread}/>
        <SingleInfo text="+94 77 297 55 11" Image={FiPhone} />
        <SingleInfo text="Beliatta" Image={MdOutlineLocationOn}/>
    </div>
  )
}

export default ContactInfo