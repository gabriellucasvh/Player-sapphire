import { Cast, CirclePlus, Heart, ListMusic, Play, Shuffle, SkipBack, SkipForward, SlidersHorizontal, Undo2, Volume2 } from 'lucide-react'
import React from 'react'
import { Progress } from "@/components/ui/progress"
import Image from 'next/image'
import Link from 'next/link'
import { Slider } from "@/components/ui/slider"

const Player = () => {
    return (
        <div className="fixed bottom-0 w-full h-24 sm:h-28 px-3 sm:px-4 lg:px-6 bg-slate-950 border-t border-vulcan-700 flex flex-row sm:flex-row items-center justify-between gap-2 sm:gap-4">
            
            {/* Seção da imagem e informações da música */}
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start">
                <div className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 border rounded-md overflow-hidden flex justify-center items-center">
                    <Image
                        src="/arctic.jpg"
                        alt="Image"
                        className="object-cover w-full h-full"
                        width={80}
                        height={80}
                        quality={100}
                    />
                </div>
                <div className="flex flex-col text-center sm:text-left">
                    <Link href="" className="hover:underline text-xs sm:text-sm md:text-base">
                        <p>Brianstorm</p>
                    </Link>
                    <Link href="" className="hover:underline text-[8px] text-start sm:text-sm md:text-sm text-gray-400">
                        <p>Arctic Monkeys</p>
                    </Link>
                </div>
                <div className="flex gap-2">
                    <button className="hover:text-vulcan-400 transition-colors duration-200">
                        <Heart className='w-4 h-4 lg:w-5 lg:h-5' />
                    </button>
                    <button className="hover:text-vulcan-400 transition-colors duration-200">
                        <CirclePlus className='w-4 h-4 lg:w-5 lg:h-5' />
                    </button>
                </div>
            </div>

            {/* Controle de reprodução */}
            <div className="flex flex-col items-center justify-center w-full sm:w-auto gap-2 sm:gap-3">
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                    <button className="opacity-50 hover:opacity-100 transition-opacity duration-200">
                        <Shuffle className='w-4 h-4 lg:w-5 lg:h-5'/>
                    </button>
                    <button className="opacity-50 hover:opacity-100 transition-opacity duration-200">
                        <SkipBack className='w-4 h-4 lg:w-5 lg:h-5'/>
                    </button>
                    <button className="bg-white rounded-full p-2 hover:scale-110 transition-transform duration-200">
                        <Play className="text-black w-4 h-4 lg:w-5 lg:h-5" />
                    </button>
                    <button className="opacity-50 hover:opacity-100 transition-opacity duration-200">
                        <SkipForward className='w-4 h-4 lg:w-5 lg:h-5' />
                    </button>
                    <button className="opacity-50 hover:opacity-100 transition-opacity duration-200">
                        <Undo2 className='w-4 h-4 lg:w-5 lg:h-5' />
                    </button>
                </div>
                <div className="flex items-center justify-center w-full max-w-xs gap-1 sm:gap-2">
                    <span className="text-xs sm:text-sm text-gray-400">0:42</span>
                    <Progress value={33} className="flex-grow" />
                    <span className="text-xs sm:text-sm text-gray-400">2:33</span>
                </div>
            </div>

            {/* Controles de volume e outras opções */}
            <div className="hidden lg:flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center">
                <button className="opacity-50 hover:opacity-100 transition-opacity duration-200">
                    <ListMusic className='w-4 h-4 lg:w-5 lg:h-5'/>
                </button>
                <button className="opacity-50 hover:opacity-100 transition-opacity duration-200">
                    <Cast className='w-4 h-4 lg:w-5 lg:h-5'/>
                </button>
                <button className="opacity-50 hover:opacity-100 transition-opacity duration-200">
                    <Volume2 className='w-4 h-4 lg:w-5 lg:h-5'/>
                </button>
                <Slider defaultValue={[33]} max={100} step={1} className="w-16 sm:w-20 md:w-24" />
                <button className="opacity-50 hover:opacity-100 transition-opacity duration-200">
                    <SlidersHorizontal className='w-4 h-4 lg:w-5 lg:h-5'/>
                </button>
            </div>
        </div>
    )
}

export default Player
