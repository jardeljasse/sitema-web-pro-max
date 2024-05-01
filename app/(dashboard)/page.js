"use client"

import Image from 'next/image'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className='flex flex-col h-[100vh] items-center'>
      <div>
        <Image
          src="/images/sen-logo.png"
          width={200}
          height={200}
          className="block mx-auto" />
      </div>
      <p className='mt-8'>Olá <strong>{session?.user.name}</strong>       , seja bem vindo de volta!</p>
    </div>
  )
}
