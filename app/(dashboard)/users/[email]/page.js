"use client"

import React, { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { useParams } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import UserForm from "@/components/UserFom";

export default function page(){

        //pegando dados na base de dados
        const [user, setUser] = useState([])
        const [isLoading, setIsLoading] = useState(false)
        const params = useParams
    
        //evitar efeitos colaterais (side effects) 'useEffect'
       useEffect(() =>{
        setIsLoading(true);
        fetch("/api/users" + params.email).then((response) => response.json()).then((data) => {
            setUser(data.user)
            setIsLoading(false);
            // console.log(data.users)
        }).catch((error) => {
            alert("Ocorreu um erro, buscando listar os usuários" + error)
            setIsLoading(false);
        });
    
       }, [])

       const handleUpdateUser = (e) =>{
        e.prevent.Dafault();
       }

    return (
        <>
         <PageHeader title="Editar e Visualizar Usuário">
            Aqui voçê pode <strong>Visualizar</strong> e <strong>Editar</strong> Usuário!
         </PageHeader>

        {
            user && (
                <section className="mt-8">
                    <UserForm user={user} onSubmit={handleUpdateUser}/>
                </section>
            )
        }

         {isLoading && (
            <p className="mt-16 text-center">
                <FontAwesomeIcon icon={faCircleNotch} 
                className="animate-spin w-6"/>
            </p>
        )}
        </>
    )
}