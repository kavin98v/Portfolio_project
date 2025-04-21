import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

function ContactSocial() {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial Icon={SiGithub} link="https://github.com/kavin98v"/>
        <SingleContactSocial Icon={BsLinkedin} link="linkedin.com/in/kavindu-shalinda-777277264"/>
        <SingleContactSocial Icon={FaFacebookSquare} link="https://www.facebook.com/kavindu.shalinda"/>
    </div>
  )
}

export default ContactSocial