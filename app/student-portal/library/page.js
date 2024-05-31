import Navbar from '@/components/Navbar'
import React from 'react'
import Image from "next/image";
import Link from "next/link"

export default function page() {
    return (
        <>
            <Navbar />
            <div className="showcase-library bg-skin-cl500 h-[60vh]">
                <div className="container flex items-center justify-center h-[60vh]">
                    <h1 className='text-6xl font-bold text-white'>BIBLIOTECA <span className='span-color text-gray font-light'>VIRTUAL</span></h1>
                </div>
            </div>

            <main>
                <div className="container">
                    <h2 className='text-3xl'>Livros</h2>
                    <hr className='w-[100px] h-8 text-skin-cl900' />
                    <div className="books-items flex flex-wrap">
                        <div className="book-item">
                            <Image
                                src="/images/subjects/historia-9.png"
                                width={200}
                                height={300}
                                className='border'
                            />
                            <Link href={"books/historia-9.zip"}><span className='bg-skin-cl100 p-1 text-white text-[13px]'>Descarregar</span></Link>
                            <Link href={"books/historia-9.zip"}><span className='bg-skin-cl100 p-1 text-white text-[13px]'>Descarregar</span></Link>                            
                        </div>
                    </div>
                </div>
                <div className='h-[200px]'>
                    dsfasd
                </div>
            </main>
        </>
    )
}
