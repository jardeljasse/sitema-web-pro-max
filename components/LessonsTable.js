'use client'

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import LessonsTableRow from './LessonsTableRow';


export default function LessonsTable() {

    const [lessons, setLessons] = useState([])
     const [isLoadingLessons, setIsLoadingLessons] = useState(false)
     
 
     //evitar efeitos colaterais (side effects) 'useEffect'
    useEffect(() =>{
     setIsLoadingLessons(true);
     fetch("/api/lessons").then((response) => response.json()).then((data) => {
         setLessons(data.lessons)
         setIsLoadingLessons(false);
         // console.log(data.users)
     }).catch((error) => {
         alert("Ocorreu um erro, tentando listar as aulas")
         setIsLoadingLessons(false);
     });
 
    }, []);
 
     //   METHOD TO DELETE
     const handleDeleteLessons = (id, setIsDeleting) => {
    
        setIsDeleting(true);
    
            fetch("/api/lessons/" + id,{ 
                method: "DELETE",
            }).then( (res) => {
                if(!res.ok){
                    throw new Error("Ocorreu um erro removendo a aula com o id - : " + id + " " + res)
                } else{
                    return res;
                    //return res.json()
                }
            }).then((data) => {
                alert("Aula removida com sucesso")
                setIsDeleting(false)//desativar apos o cadastro
                // router.push("/teacher")
                //RELOAD da Tabela apos deletar usuario

                const newLessons = lessons.filter((lessons2) => lessons2._id !== id);

                setLessons(newLessons);
            }).catch(err => {
                alert("Ocorreu um erro removendo a aula com o id: "+ id)
                setIsDeleting(false);
            }) 
       }
  return (
     //pegando dados na base de dados
     <>
      <p className="mb-4">Total de Trimestres: {lessons.length}</p>
         <table className="w-full">
             <thead className="bg-skin-cl700 text-white">
                 <tr className="text-left">
                     <th></th>
                     <th>Disciplina</th>
                     <th>Título</th>
                     <th className="p-2">Trimestre</th>
                     <th>Data</th>                     
                     <th>Acções</th>                     
                 </tr>
             </thead>
             <tbody>               
                {
                lessons && lessons.map((lessons, i) => {
                     return (
                     <LessonsTableRow teacher={lessons} 
                     key={lessons._id}// chave do React que utiliza para controlar 'chaves' semelhantes
                     i={i + 1}
                     lessons={lessons} 
                     handleDeleteLessons={handleDeleteLessons}/>
                     )
                 })
                }
             </tbody>
         </table>
         {/* rodando icon antes de carregar a tabela */}
         {isLoadingLessons && (
             <p className="mt-16 text-center">
                 <FontAwesomeIcon icon={faCircleNotch} 
                 className="animate-spin w-6 text-skin-cl100"/>
             </p>
         )}
     </>
  )
}
