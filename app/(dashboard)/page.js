"use client"

import Image from 'next/image'
import { useSession } from 'next-auth/react'

export default function Home() {
  const {data: session} = useSession()

  return (
    <div className='flex flex-col h-[100vh] items-center'>
      <div>
        <Image src="/images/gcl.jpg" alt="Green Capital Logistic Image"
        width={300}
        height={300}
        
        />
      </div>
      <p className='mt-8'>Olá <strong>{session?.user.name}</strong>       , seja bem vindo de volta!</p>
    </div>
  )
}
