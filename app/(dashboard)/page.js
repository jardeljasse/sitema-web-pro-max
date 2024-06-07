"use client"

import Image from 'next/image'
import { useSession } from 'next-auth/react'
import {globals} from '../globals.css'

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className='flex flex-col h-[100vh] items-center'>
      <div className='main-img bg-gradient-to-r from-gray-500 to-blue-500 rounded-full'>
        <Image
          src="/images/sen-logo-white.png"
          width={200}
          height={200}
          className=" block mx-auto  p-1 " />
      </div>
      <p className='mt-8 text-skin-cl700'>Olá <strong>{session?.user.name}</strong>, seja bem vindo de volta!</p>
    </div>
  )
}
