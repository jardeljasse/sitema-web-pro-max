import PageHeader from "@/components/PageHeader"
import UserTableRow from "@/components/UserTableRow"
import React from "react"

export default function page(){
 //criando um 'FRAGMENTO EM REACT <>...</> OU <React.Fragment></React.Fragment>'   
 return (
    <>
    <PageHeader title="Lista de Usuário">
    <p>Aqui voçê pode listar e visulizar os usuários registados no sistema</p>
    </PageHeader>

    <section className="mt-8">
        <p className="mb-4">Usuários totais: 7</p>
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
               <UserTableRow i={1}/> 
               <UserTableRow i={2}/> 
               <UserTableRow i={3}/> 
            </tbody>
        </table>
    </section>    
    </>
 )
}