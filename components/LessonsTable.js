'use client'

import React, { useEffect, useState } from 'react'
import TeachersTableRow from './TeachersTableRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import LessonsTableRow from './LessonsTableRow';

export default function LessonsTable() {

    const [teachers, setTeachers] = useState([])
     const [isLoadingTeachers, setIsLoadingTeachers] = useState(false)
     
 
     //evitar efeitos colaterais (side effects) 'useEffect'
    useEffect(() =>{
     setIsLoadingTeachers(true);
     fetch("/api/teachers").then((response) => response.json()).then((data) => {
         setTeachers(data.teachers)
         setIsLoadingTeachers(false);
         // console.log(data.users)
     }).catch((error) => {
         alert("Ocorreu um erro, tentando listar os usuários")
         setIsLoadingTeachers(false);
     });
 
    }, []);
 
     //   METHOD TO DELETE
     const handleDeleteTeacher = (id, setIsDeleting) => {
    
        setIsDeleting(true);
    
            fetch("/api/teachers/" + id,{ 
                method: "DELETE",
            }).then( (res) => {
                if(!res.ok){
                    throw new Error("Ocorreu um erro removendo o(a) professor(a) com o Identificador - : " + id)
                } else{
                    return res;
                    //return res.json()
                }
            }).then((data) => {
                alert("Professor(a) removido(a) com Sucesso!")
                setIsDeleting(false)//desativar apos o cadastro
                // router.push("/teacher")
                //RELOAD da Tabela apos deletar usuario

                const newTeachers = teachers.filter((teachers2) => teachers2._id !== id);

                setTeachers(newTeachers);
            }).catch(err => {
                alert("Ocorreu um erro removendo o professor com o Id: "+ id)
                setIsDeleting(false);
            }) 
       }
  return (
     //pegando dados na base de dados
     <>
      <p className="mb-4">Total de Trimestres: {teachers.length}</p>
         <table className="w-full">
             <thead className="bg-skin-cl700 text-white">
                 <tr className="text-left">
                     <th></th>
                     <th className="p-2">Trimestre</th>
                     <th>Disciplina</th>
                     <th>Aulas</th>
                     <th>Data</th>                     
                     <th>Acções</th>                     
                 </tr>
             </thead>
             <tbody>
                 {/* CRUD: READING */}
                 {/* mapeando os dados na BD */}
                {
                teachers && teachers.map((teacher, i) => {
                     return (
                     <LessonsTableRow teacher={teacher} 
                     key={teacher._id}// chave do React que utiliza para controlar 'chaves' semelhantes
                     i={i + 1}
                     teachers={teacher} 
                     handleDeleteTeacher={handleDeleteTeacher}/>
                     )
                 })
                }
             </tbody>
         </table>
         {/* rodando icon antes de carregar a tabela */}
         {isLoadingTeachers && (
             <p className="mt-16 text-center">
                 <FontAwesomeIcon icon={faCircleNotch} 
                 className="animate-spin w-6 text-skin-cl100"/>
             </p>
         )}
     </>
  )
}
