import EmptySubjects from '@/components/EmptySubjects'
import HeaderPortal from '@/components/HeaderPortal'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function page() {
    return (
        <>
            <Navbar />

            <HeaderPortal />

            <main className="bg-gray-900 text-white p-10">
            <EmptySubjects />
                
            </main>
        </>
    )
}
