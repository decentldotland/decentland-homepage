import Logo from '../assets/logo.png'
import {MenuIcon} from '@heroicons/react/outline'
import { useState } from 'react'
/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Ark', href: 'https://ark.decent.land' },
  { name: 'Docs', href: 'https://docs.decent.land' },
  { name: 'Blog', href: 'https://mirror.xyz/decentdotland.eth'},
  { name: 'Roadmap', href: '/roadmap', classes: 'hover:transition-color hover:drop-shadow-[0_0px_20px_rgba(0,255,255,0.5)] text-yellow-500 border-solid pt-1 pb-1 pl-3 pr-3 rounded-lg border-yellow-700 border-2 hover:text-yellow-300 hover:border-yellow-600'},
]

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <header className="bg-gray-900/95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6" aria-label="Top">
        <div className="w-full py-1 flex justify-between">
          <div className="flex items-center">
            <a href="/" className="h-14 sm:mr-2 w-14">
              <img
                src={Logo}
                alt=""
              />
           
            </a>
            <span className="hidden sm:block">
              <span className="text-white flex items-center font-black mr-6"><a href="/">decent.land</a></span>
            </span>


            <MenuIcon onClick={() => setToggle(!toggle)}
              height={25} 
              width={25} 
              color={"white"} 
              className="absolute right-1 w-14 cursor-pointer sm:hidden"/>

          
            <div className="ml-2 sm:ml-10 space-x-6 sm:space-x-12 hidden sm:block">
              {navigation.map((link) => (
                <a key={link.name} 
                  href={link.href} 
                  className={`text-base font-medium text-white ${link.classes}`}>
                  {link.name}
                </a>
              ))}
            </div>
           
          </div>
      
          { /*
          <div className="ml-10 space-x-4">
            <a
              
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div>
          */ } 
        </div>
        <div className="w-full"></div>
      </nav>
      <div className='sm:hidden'>

        {
          toggle && (
            
            <div className='bg-[#1D2432] absolute
                h-52 w-screen z-50'>
                <div className="bg-gray-700 dark:bg-gray-600 h-[2px] w-full"></div>
                <div className='px-10'>
                  {navigation.map((link) => (
                    <a key={link.name} 
                      href={link.href} 
                      className={`text-base font-medium 
                        mt-4 
                        text-white flex items-center justify-center ${link.classes}`}>
                      {link.name}
                    </a>
                  ))}
                </div>
            </div>
          )
        }
      </div>
    </header>
  )
}
