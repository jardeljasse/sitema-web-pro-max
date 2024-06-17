"use client"

import DoubtsForm from "@/components/DoubtsForm";
import PageHeader from "@/components/PageHeader";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page(){

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleAddDoubts = (e) =>{
        setIsLoading(true)
        //quando o formulario for submetido devera travar o reload da pagina
        e.preventDefault();

        const formData = new FormData(e.target)

        const doubtsData = {}
        for(const [key, value] of formData.entries()){
            doubtsData[key] = value
        }


        fetch("/api/doubts",{ 
            method: "POST",
            body: JSON.stringify(doubtsData),
        }).then( (res) => {
            if(!res.ok){
                throw new Error("Ocorreu um erro ao tentar responder à dúvida do aluno "+ doubtsData.name)
            } else{
                return res.json()
            }
        }).then((data) => {
            alert("Dúvida "+ doubtsData.name + " respondida com Sucesso!")
            setIsLoading(false)//desativar apos o cadastro
            router.push("/doubts")
        }).catch(err => {
            alert("Ocorreu um erro ao tentar responder à dúvida do aluno "+ doubtsData.name)
            setIsLoading(false);
        }) 
    }
    
    return(
        <>
            <PageHeader title="Responder às Dúvidas">
                <p>Aqui podes responder às dúvidas dos alunos</p>
            </PageHeader>

            <section>
                <DoubtsForm onSubmit={handleAddDoubts} isLoading={isLoading} />
            </section>

        </>
    )
}