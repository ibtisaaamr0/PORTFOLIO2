"use client"

import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoCloseCircle } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";



export default function Navbar() {

  const [Up, setUp] = useState(false)
  return (
    <>
      <div className=' left-45 sm:left-70 text-3xl font-black italic top-1 lg:hidden  p-3 rounded-full '> 
        <h1 className='flex justify-center items-center '><Link href={"/"}
          className='cursor-pointer '>Portfolio</Link></h1></div>
      <nav className="fixed w-full z-50 lg:bg-white lg:shadow-md px-5 py-3 flex justify-between items-center rounded-full 
                bottom-2 lg:bottom-auto lg:top-0 animate-dropup">

        <div><Link href={"/"}>
          <Image src={assets.logo}
            alt=''
            width={80}
            height={20}
            className='cursor-pointer rounded-full lg:flex hidden'
          />
        </Link></div>

        <div>
          {!Up && (

            <div className=' font-extrabold text-base md:text-2xl lg:text-4xl btext-white  rounded-full sm:w-640px  p-4 flex  justify-center items-center md:max-w-screen-md lg:hidden bg-linear-to-t from-gray-300 to-gray-600'
            >
              <button onClick={() => { setUp(true) }}

                className='cursor-pointer hover:animate-pulse hover:underline flex flex-row justify-center items-center gap-3'>
                <IoMenu />Menu
              </button>
            </div>
          )}

          <ul className=" lg:flex lg:flex-row lg:justify-between gap-10 lg:gap-60 md:gap-30 text-gray-800 font-medium bg-linear-to-b from-gray-300 to-gray-100 rounded-full py-4 md:px-10  shadow-lg shadow-r-xl hidden md:text-2xl md:font-bold">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/projects"}>Projects</Link>
            </li>

            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>


        <div><Link href={"/about"}>
          <Image src={assets.profile_img}
            alt=''
            width={80}
            height={20}
            className='cursor-pointer lg:flex rounded-full lg:w-17 hidden'
          />
        </Link></div>
      </nav>


      {/* Mobile ui */}

      {Up &&
        (
          <div className='flex flex-col justify-center items-center lg:hidden '>
            <ul className=" fixed flex flex-col justify-center items-center bottom-5 bg-linear-to-t from-gray-300 to-gray-600 text-white  rounded-4xl gap-10 text-base font-bold min-w-2 p-4 ">
              <div className='flex flex-row w-full sm:min-w-[640px] justify-between'>

                <li className='left-0'>
                  <Link href={"/"}
                    onClick={() => setUp(!Up)}>
                    <Image src={assets.logo_dark}
                      alt=''
                      width={50}
                      height={20}
                      className='cursor-pointer rounded-full md:w-17 ' /></Link>
                </li>
                <li>
                  <Link href={"/contact"}
                    onClick={() => setUp(!Up)}>
                    <VscAccount
                      className='cursor-pointer rounded-full md:w-17 '
                    /></Link>
                </li>
              </div>

              <li className='hover:animate-bounce hover:underline hover:text-black'>
                <Link href={"/"}
                  onClick={() => setUp(false)}>Home</Link>
              </li>
              <li className='hover:animate-bounce hover:underline hover:text-black'>
                <Link href={"/projects"}
                  onClick={() => setUp(false)}>Projects</Link>
              </li>

              <li className='hover:animate-bounce hover:underline hover:text-black'>
                <Link href={"/contact"}
                  onClick={() => setUp(false)}>Contact</Link>
              </li>

              <button onClick={() => { setUp(false) }}
                className='cursor-pointer '><IoCloseCircle /></button>


            </ul>
          </div>
        )}
    </>
  )
}

