import React from 'react'
import Link from 'next/link'
import { Bell, Compass, Home, Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="fixed max-h-20 min-h-20 w-full bg-slate-950 border-b border-vulcan-700 flex justify-between items-center px-4 lg:px-7">
      <Link href="/">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-cookie flex items-center gap-2">
          <Image 
            src="/sapphirelogo.png"
            alt="Image"
            className="object-cover w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            width={40}
            height={40}
            quality={100}
          />
          Sapphire
        </p>
      </Link>

      <div className="hidden lg:flex flex-row items-center gap-2 sm:-ml-16">
        <div className="relative group flex flex-col">
          <Link href="/" className="bg-vulcan-900/40 border-2 border-blue-900 rounded-full p-2 flex items-center">
            <Home className="h-5 w-5" />
          </Link>
          <span className="absolute ml-1 top-10 sm:top-12 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Página inicial
          </span>
        </div>

        <div className="items-center gap-2 relative hidden sm:flex">
          <input
            className="outline-none bg-slate-950 shadow-inner p-2 pl-8 rounded-full border-2 border-blue-900"
            type="text"
            placeholder="O que quer ouvir agora?"
          />
          <button type="submit" className="absolute left-2">
            <Search className="w-5 h-5" />
          </button>
          <div className="relative group">
            <Link href="/" className="bg-vulcan-900/40 border-2 border-blue-900 rounded-full p-2 flex items-center ml-2">
              <Compass className="h-5 w-5" />
            </Link>
            <span className="absolute top-10 sm:top-11 mb-1 w-max px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              Explorar
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4">
        <div className="relative group">
          <Link href="/">
            <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
        </div>
        <Link href="/">
          <Avatar className="border-2 border-vulcan-400">
            <AvatarImage src="https://github.com/gabriellucasvh.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
