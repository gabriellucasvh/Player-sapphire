import React from 'react'
import Link from 'next/link'
import { Bell, Compass, Home, Menu, Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
  return (
    <div className='max-h-20 min-h-20 w-full bg-vulcan-900/20 border-b border-vulcan-700 flex justify-between items-center px-10'>
      <Link href="/">
        <p className='text-4xl font-cookie'>Sapphire</p>
      </Link>
      <div className='flex flex-row items-center gap-2'>
        <Link href="/" className='bg-vulcan-900/40 border-2 border-blue-900 rounded-full px-3 py-2 flex items-center gap-2 hover:bg-vulcan-900/60 hover:text-vulcan-400 transition-colors duration-300'>  
          <Home className='h-5 w-5' />Menu
        </Link>
        <div className='flex items-center gap-2 relative'>
          <input
            className='outline-none bg-vulcan-900/20 shadow-inner p-2 pl-8 rounded-full border-2 border-blue-900'
            type="text"
            placeholder='O que quer ouvir agora?'
          />
          <button type='submit' className='absolute left-2'>
            <Search className='w-5 h-5' />
          </button>
          <Link href="/" className='bg-vulcan-900/40 border-2 border-blue-900 rounded-full p-2 flex items-center ml-2 hover:bg-vulcan-900/60 hover:text-vulcan-400 transition-colors duration-300'>
            <Compass className='h-5 w-5' />
          </Link>
        </div>
      </div>
      <div className='flex flex-row items-center gap-4'>
        <Bell className='h-5 w-5' />
        <Avatar className='border-2 border-vulcan-400'>
          <AvatarImage src="https://github.com/gabriellucasvh.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}

export default Navbar
