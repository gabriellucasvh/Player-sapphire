import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Section = () => {
    return (
        <div className='fixed mt-20  bg-slate-950 max-w-72 h-[510px] border-r border-vulcan-700 hidden lg:flex flex-col'>
            <div className='p-4'>
                <h1 className='flex items-center justify-center font-semibold text-xl mb-2'>
                    Biblioteca
                </h1>
                <div className='flex flex-row gap-2'>
                    <Link href="" className='bg-vulcan-900/40 border-2 border-blue-900 rounded-full px-4 py-1 flex items-center'>Playlists</Link>
                    <Link href="" className='bg-vulcan-900/40 border-2 border-blue-900 rounded-full px-4 py-1 flex items-center'>Podcasts</Link>
                </div>
                <div className='flex justify-end items-center mt-2'>
                    <button className='flex flex-row justify-center items-center opacity-80 hover:opacity-100 transition-opacity duration-200'>
                        Recentes <Menu className='h-4 w-4 mt-1 ml-1' />
                    </button>
                </div>
                <div className='flex flex-row gap-2 mt-2'>
                    <Link href="" className='w-full'>
                        <div className=' hover:bg-vulcan-400/20 rounded-xl w-full px-2 py-2 flex items-center gap-2'>
                            <div className="w-14 h-14 border rounded-md overflow-hidden flex justify-center items-center">
                                <Image
                                    src="/favorite.png"
                                    alt="Image"
                                    className="object-cover w-full h-full"
                                    width={80}
                                    height={80}
                                    quality={100}
                                />
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                                <p>
                                    Músicas curtidas
                                </p>
                                <p className='text-sm opacity-55'>
                                    1.902 músicas
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-row gap-2 mt-2'>
                    <Link href="" className='w-full'>
                        <div className=' hover:bg-vulcan-400/20 rounded-xl w-full px-2 py-2 flex items-center gap-2'>
                            <div className="w-14 h-14 border rounded-md overflow-hidden flex justify-center items-center">
                                <Image
                                    src="/theacousthic.png"
                                    alt="Image"
                                    className="object-cover w-full h-full"
                                    width={80}
                                    height={80}
                                    quality={100}
                                />
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                                <p>
                                    Rock Acústico
                                </p>
                                <p className='text-sm opacity-55'>
                                    902 músicas
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-row gap-2 mt-2'>
                    <Link href="" className='w-full'>
                        <div className=' hover:bg-vulcan-400/20 rounded-xl w-full px-2 py-2 flex items-center gap-2'>
                            <div className="w-14 h-14 border rounded-md overflow-hidden flex justify-center items-center">
                                <Image
                                    src="/metallica.jpg"
                                    alt="Image"
                                    className="object-cover w-full h-full"
                                    width={80}
                                    height={80}
                                    quality={100}
                                />
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                                <p>
                                    Metallica
                                </p>
                                <p className='text-sm opacity-55'>
                                    50 músicas
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-row gap-2 mt-2'>
                    <Link href="" className='w-full'>
                        <div className=' hover:bg-vulcan-400/20 rounded-xl w-full px-2 py-2 flex items-center gap-2'>
                            <div className="w-14 h-14 border rounded-md overflow-hidden flex justify-center items-center">
                                <Image
                                    src="/scorpions.jpg"
                                    alt="Image"
                                    className="object-cover w-full h-full"
                                    width={80}
                                    height={80}
                                    quality={100}
                                />
                            </div>
                            <div className='flex flex-col justify-center items-start'>
                                <p>
                                    Scorpions
                                </p>
                                <p className='text-sm opacity-55'>
                                    66 músicas
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Section