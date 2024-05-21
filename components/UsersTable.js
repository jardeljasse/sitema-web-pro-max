"use client"

import { useEffect, useState } from "react";
import UserTableRow from "./UserTableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";



export default function UsersTable(){

    //pegando dados na base de dados
    const [users, setUsers] = useState([])
    const [isLoadingUsers, setIsLoadingUsers] = useState(false)
    

    //evitar efeitos colaterais (side effects) 'useEffect'
   useEffect(() =>{
    setIsLoadingUsers(true);
    fetch("/api/users").then((response) => response.json()).then((data) => {
        setUsers(data.users)
        setIsLoadingUsers(false);
        // console.log(data.users)
    }).catch((error) => {
        alert("Ocorreu um erro, tentando listar os usuários")
        setIsLoadingUsers(false);
    });

   }, []);

    //   METHOD TO DELETE
   const handleDeleteUser = (email, setIsDeleting) => {
    
    setIsDeleting(true);

        fetch("/api/users/" + email,{ 
            method: "DELETE",
        }).then( (res) => {
            if(!res.ok){
                throw new Error("Ocorreu um erro deletando o usuário com o Email: " + email)
            } else{
                return res;
                //return res.json()
            }
        }).then((data) => {
            // alert("Usuário "+ email + " foi deletado com Sucesso!")
            setIsDeleting(false)//desativar apos o cadastro
            //router.push("/users")
            //RELOAD da página apos deletar usuario
            const newUsers = users.filter((user) => user.email !== email);
            setUsers(newUsers);
        }).catch(err => {
            alert("Ocorreu um erro ao deletar o usuário com o Email: "+ email)
            setIsDeleting(false);
        }) 
   }
      
    return (
    <>
     <p className="mb-4">Usuários totais: {users.length}</p>
        <table className="w-full">
            <thead className="bg-skin-cl700 text-white">
                <tr className="text-left">
                    <th></th>
                    <th className="p-2">Nome</th>
                    <th>Email</th>
                    <th>Função</th>
                    {/* <th>Idade</th>
                    <th>Género</th>
                    <th>Telefone</th> */}
                    <th>Acções</th>
                </tr>
            </thead>
            <tbody>
                {/* CRUD: READING */}
                {/* mapeando os dados na BD */}
               {
                users.map((user, i) => {
                    return (
                    <UserTableRow user={user} 
                    key={user._id}// chave do React que utiliza para controlar 'chaves' semelhantes
                    i={i + 1} 
                    handleDeleteUser={handleDeleteUser}/>
                    )
                })
               }
            </tbody>
        </table>
        {/* rodando icon antes de carregar a tabela */}
        {isLoadingUsers && (
            <p className="mt-16 text-center">
                <FontAwesomeIcon icon={faCircleNotch} 
                className="animate-spin w-6"/>
            </p>
        )}
    </>)
}