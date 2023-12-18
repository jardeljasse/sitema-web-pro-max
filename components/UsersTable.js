"use client"

import { useEffect, useState } from "react";
import UserTableRow from "./UserTableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";


export default function UsersTable(){

    //pegando dados na base de dados
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    //evitar efeitos colaterais (side effects) 'useEffect'
   useEffect(() =>{
    setIsLoading(true);
    fetch("/api/users").then((response) => response.json()).then((data) => {
        setUsers(data.users)
        setIsLoading(false);
        // console.log(data.users)
    }).catch((error) => {
        alert("Ocorreu um erro, tentando listar os usuários")
        setIsLoading(false);
    });

   }, [])
      
      
    return (
    <>
     <p className="mb-4">Usuários totais: {users.length}</p>
        <table className="w-full">
            <thead className="bg-zinc-700 text-white">
                <tr className="text-left">
                    <th></th>
                    <th className="p-2">Nome</th>
                    <th>Email</th>
                    <th>Função</th>
                    <th>Idade</th>
                    <th>Género</th>
                    <th>Telefone</th>
                    <th>Acções</th>
                </tr>
            </thead>
            <tbody>
                {/* mapeando os dados na BD */}
               {
                users.map((user, i) => {
                    return <UserTableRow user={user} i={i + 1}/>
                })
               }
            </tbody>
        </table>
        {isLoading && (
            <p className="mt-16 text-center">
                <FontAwesomeIcon icon={faCircleNotch} 
                className="animate-spin w-6"/>
            </p>
        )}
    </>)
}