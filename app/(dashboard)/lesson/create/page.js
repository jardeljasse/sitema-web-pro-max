"use client"

import LessonFormVercel from '@/components/LessonFormVercel'
import PageHeader from '@/components/PageHeader'
import React, { useState } from 'react'

export default function page() {

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
                throw new Error("Ocorreu um erro ao adicionar a aula " + lessonsData.name)
            } else {
                return res.json()
            }
        }).then((data) => {
            alert("Aula adicionada " + lessonsData.name + " com sucesso")
            setIsLoading(false)//desativar apos o cadastro
            router.push("/teachers")
        }).catch(err => {
            alert("Ocorreu um erro ao adicionar a aula " + lessonsData.name)
            setIsLoading(false);
        })
    }
    return (
        <>
            <PageHeader title="Adicionar Aula">
                <p>Adione uma nova aula.</p>
            </PageHeader>
            <section className='mt-[2rem] flex gap-[50px]'>
                {/* <LessonFormVercel handleAddLessons={handleAddLessons} /> */}
                <LessonFormVercel handleAddLessons={handleAddLessons} />
                {/* <LessonForm /> */}
            </section>
        </>
    )
}
