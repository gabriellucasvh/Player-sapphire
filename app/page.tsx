import React from 'react'
import Navbar from '@/components/specific/Navbar'
import Player from '@/components/specific/Player'
import Section from '@/components/specific/Section'

export default function Home() {
  return (
    <div className='bg-woodsmoke-950 text-white min-h-screen'>  
      <Navbar />
      <Section />
      <Player />
    </div>
  )
}
