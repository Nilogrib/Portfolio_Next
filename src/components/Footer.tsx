import React from 'react'

import { FaLinkedin, FaGithub  } from 'react-icons/fa'
import { SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>Nilogrib Ghosh</h1>
        <div className='flex space-x-6 mt-4'>
            <a href="https://www.linkedin.com/in/nilogrib/" className='hover:text-gray-300'><FaLinkedin size={24}/></a>
            <a href="https://github.com/Nilogrib" className='hover:text-gray-300'><FaGithub size={24}/></a>
            <a href="https://www.codechef.com/users/godfrey7" className='hover:text-gray-300'><SiCodechef size={24}/></a>
            <a href="https://codeforces.com/profile/coder_nil" className='hover:text-gray-300'><SiCodeforces size={24}/></a>
            <a href="https://leetcode.com/u/Nilogrib/" className='hover:text-gray-300'><SiLeetcode size={24}/></a>
        </div>
    </div>
  )
}

export default Footer