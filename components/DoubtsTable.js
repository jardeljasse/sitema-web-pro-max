'use client'

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import DoubtsTableRow from './DoubtsTableRow';
import { useSession } from 'next-auth/react';

export default function DoubtsTable() {

    const [doubts, setDoubts] = useState([])
    const [isLoadingDoubts, setIsLoadingDoubts] = useState(false)
    const { data: session } = useSession()


    //evitar efeitos colaterais (side effects) 'useEffect'
    useEffect(() => {
        setIsLoadingDoubts(true);
        fetch("/api/doubts").then((response) => response.json()).then((data) => {
            setDoubts(data.doubts)
            setIsLoadingDoubts(false);
            // console.log(data.users)
        }).catch((error) => {
            alert("Ocorreu um erro, tentando listar as dúvidas dos alunos")
            setIsLoadingDoubts(false);
        });

    }, []);

    //   METHOD TO DELETE
    const handleDeleteDoubts = (id, setIsDeleting) => {

        setIsDeleting(true);

        fetch("/api/doubts/" + id, {
            method: "DELETE",
        }).then((res) => {
            if (!res.ok) {
                throw new Error("Ocorreu um erro removendo a dúvida com o Id: " + id)
            } else {
                return res;
                //return res.json()
            }
        }).then((data) => {
            alert("Dúvida removida com Sucesso!");
            setIsDeleting(false)//desativar apos o cadastro
            //router.push("/users")
            //RELOAD da Tabela apos deletar usuario

            const newDoubts = doubts.filter((doubts2) => doubts2._id !== id);

            setDoubts(newDoubts);
        }).catch(err => {
            alert("Ocorreu um erro removendo a dúvida com o Id: " + id)
            setIsDeleting(false);
        })
    }
    return (
        //pegando dados na base de dados
        <>
            <p className="mb-4">Total de Dúvidas: {doubts.length}</p>
            <table className="w-full">
                <thead className="bg-skin-cl700 text-white">
                    <tr className="text-left">
                        <th></th>
                        <th>Dúvida</th>
                        <th>Data</th>
                        <th>Horas(AM/PM)</th>
                        {
                            session?.user.role == "admin" || session?.user.role == "teacher" &&
                        <th>Acções</th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {/* CRUD: READING */}
                    {/* mapeando os dados na BD */}
                    {
                        doubts && doubts.map((doubt, i) => {
                            return (
                                <DoubtsTableRow doubt={doubt}
                                    key={doubt._id}// chave do React que utiliza para controlar 'chaves' semelhantes
                                    i={i + 1}
                                    doubts={doubts}
                                    handleDeleteDoubts={handleDeleteDoubts} />
                            )
                        })
                    }
                </tbody>
            </table>
            {/* rodando icon antes de carregar a tabela */}
            {isLoadingDoubts && (
                <p className="mt-16 text-center">
                    <FontAwesomeIcon icon={faCircleNotch}
                        className="animate-spin w-6 text-skin-cl100" />
                </p>
            )}
        </>
    )
}
