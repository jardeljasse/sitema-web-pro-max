"use client"

import PageHeader from '@/components/PageHeader'
import TeachersForm from '@/components/TeachersForm'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

export default function page() {

  const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleAddTeachers = (e) =>{
        setIsLoading(true)
        //quando o formulario for submetido devera travar o reload da pagina
        e.preventDefault();

        const formData = new FormData(e.target)

        const teachersData = {}
        for(const [key, value] of formData.entries()){
            teachersData[key] = value
        }


        fetch("/api/teachers",{ 
            method: "POST",
            body: JSON.stringify(teachersData),
        }).then( (res) => {
            if(!res.ok){
                throw new Error("Ocorreu um erro ao cadastrar o professor com o nome "+ teachersData.name)
            } else{
                return res.json()
            }
        }).then((data) => {
            alert("Professor "+ teachersData.name + " cadastrado com Sucesso!")
            setIsLoading(false)//desativar apos o cadastro
            router.push("/teachers")
        }).catch(err => {
            alert("Ocorreu um erro ao cadastrar o professor com o nome "+ teachersData.name)
            setIsLoading(false);
        }) 
    }
    
  return (
    <>
    <PageHeader title="Cadastrar Professor">
        <p>Aqui voçê pode cadastrar um professor ao sistema</p>
    </PageHeader>
    <section>
        <TeachersForm onSubmit={handleAddTeachers} isLoading={isLoading} />
    </section>
    </>
  )
}
