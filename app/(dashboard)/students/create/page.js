"use client"

import PageHeader from "@/components/PageHeader";
import StudentsForm from "@/components/StudentsForm";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleAddStudents = (e) =>{
        setIsLoading(true)
        //quando o formulario for submetido devera travar o reload da pagina
        e.preventDefault();

        const formData = new FormData(e.target)

        const studentsData = {}
        for(const [key, value] of formData.entries()){
            studentsData[key] = value
        }

        fetch("/api/students",{ 
            method: "POST",
            body: JSON.stringify(studentsData),
        }).then( (res) => {
            if(!res.ok){
                throw new Error("Ocorreu um erro ao cadastrar o aluno com o nome "+ studentsData.name)
            } else{
                return res.json()
            }
        }).then((data) => {
            alert("Aluno "+ studentsData.name + " cadastrado com Sucesso!")
            setIsLoading(false)//desativar apos o cadastro
            router.push("/students")
        }).catch(err => {
            alert("Ocorreu um erro ao cadastrar o aluno com o nome "+ studentsData.name)
            setIsLoading(false);
        }) 
    }
    return (
        <>
            <PageHeader title="Cadastrar aluno">
            <p>Aqui voçê pode cadastrar um novo aluno para o sistema</p>
            </PageHeader>
            <section className="mt-8 w-full">
                <StudentsForm onSubmit={handleAddStudents} isLoading={isLoading} />
            </section>
        </>
    )
}