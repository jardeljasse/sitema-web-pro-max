"use client"
import HeaderPortal from '@/components/HeaderPortal'
import Navbar from '@/components/Navbar'
import PageHeaderPortal from '@/components/PageHeaderPortal'
import VlibrasPlugin from '@/components/VlibrasPlugin'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <>
            <Navbar />
            
            <HeaderPortal />

            <main className='h-[70vh] mb-[4rem]'>
                <div className="container trimester-cont">
                    <PageHeaderPortal className="text-center" title="Disciplina de Português">
                        Selecione o Trimestre
                    </PageHeaderPortal>
                    
                    <VlibrasPlugin forceOnload={false} />
                    <div className="trimester-items transition mt-7">
                        <ul>
                            <li className='trimester-time-line flex gap-5'>
                                <span></span>
                                <div className="trimester-item text-right p-5 w-[100%] text-white rounded-[10px]">
                                    <Link href="/student-portal/empty-subject/">
                                        <h3>Iº Trimestre</h3>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="trimester-items mt-10">
                        <ul>
                            <li className='trimester-time-line flex gap-5'>
                                <span></span>
                                <div className="trimester-item text-right p-5 w-[100%] text-white rounded-[10px]">
                                <Link href="/student-portal/portuguese-subject/l-trimester">
                                        <h3>IIº Trimestre</h3>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="trimester-items mt-10">
                        <ul>
                            <li className='trimester-time-line flex gap-5'>
                                <span></span>
                                <div className="trimester-item text-right p-5 w-[100%] text-white rounded-[10px]">
                                    <Link href="/student-portal/empty-subject/">
                                        <h3>IIIº Trimestre</h3>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </main>
                {/* <VlibrasPlugin /> */}
        </>

    )
}
