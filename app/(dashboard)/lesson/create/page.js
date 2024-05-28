import LessonForm from '@/components/LessonForm'
import PageHeader from '@/components/PageHeader'
import React from 'react'

export default function page() {
    return (
        <>
            <PageHeader title="Adicionar Aula">
                <p>Adione uma nova aula.</p>
            </PageHeader>
            <section className='mt-[2rem]'>
                <LessonForm />
            </section>
        </>
    )
}
