"use client"

import LessonForm from '@/components/LessonForm';
import LessonFormVercel from '@/components/LessonFormVercel'
import PageHeader from '@/components/PageHeader'
import { useRouter } from 'next/navigation';
import { useState } from 'react'

export default function page() {

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const [subject, setSubject] = useState('');
    const [trimester, setTrimester] = useState('');
    const [data, setData] = useState('');

    const handleAddLessons = (e) => {
        setIsLoading(true)
        e.preventDefault();

        const collectionName = `${subject}_${trimester}`;

        const formData = new FormData(e.target)

        const lessonsData = {}
        for (const [key, value] of formData.entries()) {
            lessonsData[key] = value
        }


        fetch("/api/lessons", {
            method: "POST",
            body: JSON.stringify(lessonsData),
            // body: JSON.stringify({ collectionName, data }),
        }).then((res) => {
            if (!res.ok) {
                throw new Error("Ocorreu um erro ao adicionar a aula " + lessonsData.title)
            } else {
                return res.json()
            }
        }).then((data) => {
            alert("Aula adicionada " + lessonsData.title + " com sucesso")
            setIsLoading(false)//desativar apos o cadastro
            router.push("/lesson")
        }).catch(err => {
            alert("Ocorreu um erro ao adicionar a aula " + lessonsData.title + err)
            setIsLoading(false);
        })
    }
    return (
        <>
            <PageHeader title="Adicionar Aula">
                <p>Adione uma nova aula.</p>
            </PageHeader>
            <section className='mt-[2rem] flex gap-[50px]'>
                {/* <LessonFormVercel 
                handleAddLessons={handleAddLessons} /> */}
                <LessonForm 
                onSubmit={handleAddLessons}
                isLoading={isLoading} />
            </section>
        </>
    )
}
