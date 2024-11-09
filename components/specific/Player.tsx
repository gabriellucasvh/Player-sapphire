import { Cast, CirclePlus, Heart, ListMusic, Play, Shuffle, SkipBack, SkipForward, SlidersHorizontal, Undo2, Volume2 } from 'lucide-react'
import React from 'react'
import { Progress } from "@/components/ui/progress"
import Image from 'next/image'
import Link from 'next/link'
import { Slider } from "@/components/ui/slider"


const Player = () => {
    return (
        <div className='fixed flex items-center bottom-0 h-28 px-5 w-full bg-vulcan-900/20'>
            <div className="flex items-center justify-start w-[450px] h-full gap-2">
                <div className="w-20 h-20 border rounded-md overflow-hidden flex justify-center items-center">
                    <Image
                        src="/arctic.jpg"
                        alt="Image"
                        className="object-cover w-full h-full"
                        width={80}
                        height={80}
                        quality={100}
                    />
                </div>
                <div>
                    <Link href="" className='hover:underline'>
                        <p>Brianstorm</p>
                    </Link>
                    <Link href="" className='hover:underline'>
                        <p className='text-sm opacity-55'>Arctic Monkeys</p>
                    </Link>
                </div>
                <div className='flex flex-row justify-center items-center gap-2'>
                    <button className='hover:text-vulcan-400 transition-colors duration-200'>
                        <Heart />
                    </button>
                    <button className='hover:text-vulcan-400 transition-colors duration-200'>
                        <CirclePlus />
                    </button>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 p-3 w-full'>
                <div className='flex flex-row items-center justify-center gap-4'>
                    <button className='opacity-50 hover:opacity-100 transition-opacity duration-200'>
                        <Shuffle />
                    </button>
                    <button className='opacity-50 hover:opacity-100 transition-opacity duration-200'>
                        <SkipBack />
                    </button>
                    <button className='bg-white rounded-full p-2 hover:scale-110 transition-transform duration-200 hover:drop-shadow-xl hover:shadow-vulcan-600'>
                        <Play className='text-black' />
                    </button>
                    <button className='opacity-50 hover:opacity-100 transition-opacity duration-200'>
                        <SkipForward />
                    </button>
                    <button className='opacity-50 hover:opacity-100 transition-opacity duration-200'>
                        <Undo2 />
                    </button>
                </div>
                <div className='relative flex justify-center items-center max-w-96 w-full gap-2'>
                    <span className='text-xs opacity-85'>0:42</span>
                    <Progress value={33} />
                    <span className='text-xs opacity-85'>2:33</span>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center gap-4'>
                <button className='opacity-50 hover:opacity-100 transition-opacity duration-200'>
                    <ListMusic />
                </button>
                <button className='opacity-50 hover:opacity-100 transition-opacity duration-200'>
                    <Cast />
                </button>
                <button className='opacity-50 hover:opacity-100 transition-opacity duration-200'>
                    <Volume2 />
                </button>

                <Slider defaultValue={[33]} max={100} step={1} className='min-w-24' />

                <button className='opacity-50 hover:opacity-100 transition-opacity duration-200'>
                    <SlidersHorizontal />
                </button>
            </div>
        </div>
    )
}

export default Player
