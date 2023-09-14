'use client'
import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Nav() {
  const [nav, setNav] = useState<boolean>(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <header>
        <div className='w-1/2 max-w-[600px] flex items-center justify-start'>
          <h1>SweatShowdown</h1>
        </div>
        <div className='w-1/2 max-w-[600px] flex items-center lg:justify-center justify-end'>
          <ul className='hidden lg:flex'>
            <li>
            <Link href='/'>Lists</Link>
            </li>
            <li>
              <Link href='/'>Articles</Link>
            </li>
            <li>
            <Link href='/'>Guides</Link>
            </li>
            <li>
            <Link href='/'>Help</Link>
            </li>
          </ul>
          <button className='sm:min-w-[180px]'>
            <Link href='/'>Join Now</Link>
          </button>
          <div onClick={handleNav} className='block lg:hidden mx-4'>
              {nav ? (
                <AiOutlineClose size={30} className='text-primary cursor-pointer' />
              ) : (
                <AiOutlineMenu size={30} className='text-primary cursor-pointer' />
              )}
          </div>
          <div
          className={
            nav
              ? 'w-full bg-primary text-white absolute top-[90px] left-0 h-auto flex flex-col justify-center items-center text-center'
              : 'absolute left-[-100%]'
          }
        >
          <ul className='flex flex-col'>
            <li className='text-white'>
            <Link onClick={handleNav} href='/'>Lists</Link>
            </li>
            <li className='text-white'>
              <Link onClick={handleNav} href='/'>Articles</Link>
            </li>
            <li className='text-white'>
            <Link onClick={handleNav} href='/'>Guides</Link>
            </li>
            <li className='text-white'>
            <Link onClick={handleNav} href='/'>Help</Link>
            </li>
          </ul>
        </div>
        </div>     
        </header>
  )
}
