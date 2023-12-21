"use client"

import React, { useEffect, useState } from "react";
import PageHeader from "@/components/PageHeader";
import { useParams, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import UserForm from "@/components/UserFom";

export default function page(){

        //pegando dados na base de dados
        const [user, setUser] = useState()
        const [isLoading, setIsLoading] = useState(false)
        const [isLoadingUser, setIsLoadingUser] = useState(false)
        const params = useParams()
        const router = useRouter()
    
        //evitar efeitos colaterais (side effects) 'useEffect'
       useEffect(() => {
        setIsLoadingUser(true);
        //'params.email', chamara directamente o link que esta sendo acessado
        fetch("/api/users/" + params.email).then((response) => response.json()).then((data) => {
            setUser(data.user)
            setIsLoadingUser(false);
            // console.log(data.users)
        }).catch((error) => {
            alert("Ocorreu um erro tentando listar o Usuário!")
            setIsLoadingUser(false);
        });
    
       }, [])

       //ACTUALIZANDO OS DADOS NA BASE DE DADOS
       //DOIS METHODOS: 'PATCH & PUT'
       const handleUpdateUser = (e) =>{
        setIsLoading(true)
        //quando o formulario for submetido devera travar o reload da pagina
        e.preventDefault();

        const formData = new FormData(e.target)

        const userData = {}
        for(const [key, value] of formData.entries()){
            userData[key] = value
        }

        
        // CRUD: UPDATING/ ROUTA PARA ACTUALIZA USUARIOS
        fetch("/api/users/" + params.email, { 
            method: "PATCH",
            body: JSON.stringify(userData),
        }).then( (res) => {
            if(!res.ok){
                throw new Error("Ocorreu um erro alterando o usurário com o Email: " + params.email)
            } else{
                return res.json()
            }
        }).then(data => {
            alert("Usuário "+ userData.email + " alterado com Sucesso!")
            setIsLoading(false)//desativar apos o cadastro
            router.push("/users")
        }).catch(err => {
            alert("Ocorreu um erro tentando alterar o usurário com o Email: " + params.email)
            setIsLoading(false);
        }) 
       }

    return (
        <>
         <PageHeader title="Editar e Visualizar Usuário">
            Aqui voçê pode <strong>Visualizar</strong> e <strong>Editar</strong> Usuário!
         </PageHeader>

        {
            user && (
                <section className="mt-8">
                    <UserForm user={user} 
                    onSubmit={handleUpdateUser}
                    isLoading={isLoading}/>
                </section>
            )
        }
        {/* //se esta a carregar */}
         {isLoadingUser && (
            <p className="mt-16 text-center">
                <FontAwesomeIcon icon={faCircleNotch} 
                className="animate-spin w-6"/>
            </p>
        )}
        </>
    )
}