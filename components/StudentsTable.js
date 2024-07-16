"use client"

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faArrowUp, faCircleNotch, faPercentage } from "@fortawesome/free-solid-svg-icons";
import StudentsTableRow from "./StudentsTableRow";
import { useSession } from "next-auth/react";



export default function StudentsTable({ showHeadrs }) {

    //pegando dados na base de dados
    const [students, setSudents] = useState([])
    const [isLoadingStudents, setIsLoadingStudents] = useState(false)

    const { data: session } = useSession()

    //evitar efeitos colaterais (side effects) 'useEffect'
    useEffect(() => {
        setIsLoadingStudents(true);
        fetch("/api/students").then((response) => response.json()).then((data) => {
            setSudents(data.students)
            setIsLoadingStudents(false);
            // console.log(data.users)
        }).catch((error) => {
            alert("Ocorreu um erro, tentando listar os usuários")
            setIsLoadingStudents(false);
        });

    }, []);

    //   METHOD TO DELETE
    const handleDeleteStudents = (id, setIsDeleting) => {

        setIsDeleting(true);

        fetch("/api/students/" + id, {
            method: "DELETE",
        }).then((res) => {
            if (!res.ok) {
                throw new Error("Ocorreu um erro removendo o(a) aluno(a) com o Identificador - : " + id)
            } else {
                return res;
                //return res.json()
            }
        }).then((data) => {
            alert("Aluno(a) removido(a) com Sucesso!")
            setIsDeleting(false)//desativar apos o cadastro
            // router.push("/students")
            //RELOAD da Tabela apos deletar usuario

            const newStudents = students.filter((students2) => students2._id !== id);

            setSudents(newStudents);
        }).catch(err => {
            alert("Ocorreu um erro removendo o(a) aluno(a) com o Identificador: " + id + "   " + err)
            setIsDeleting(false);
        })
    }

    return (
        <>
            <p className="mb-4">Total de Alunos: {students.length}</p>
            <table className="w-full">
                <thead className="bg-skin-cl700 text-white">
                    <tr className="text-left">
                        {showHeadrs ? (
                            <>
                                <th></th>
                                <th className="p-2">Nome</th>
                                <th>Idade</th>
                                <th>Nacionalidade</th>
                                <th>Provincia</th>
                                <th>Género</th>
                                <th>Cidade</th>
                                <th>Bairro</th>
                                <th>Conct - Encarregado</th>
                                {/* <th>Grau de surdez</th> */}
                                <th>Doença Frequente</th>
                                {
                                    session?.user.role == "admin" &&
                                    <th>Funções</th>
                                }
                    </>):(
                        <>
                        <th></th>
                        <th className="p-2">Nome</th>
                        <th>Progresso <FontAwesomeIcon icon={faArrowTrendUp} className="w-6" /></th>
                    </>
                    )}
                    </tr>
                </thead>
                <tbody>
                    {/* CRUD: READING */}
                    {/* mapeando os dados na BD */}
                    {
                        students.map((student, i) => {
                            return (
                                <StudentsTableRow student={student}
                                    key={student._id}// chave do React que utiliza para controlar 'chaves' semelhantes
                                    i={i + 1}
                                    handleDeleteStudents={handleDeleteStudents} />
                            )
                        })
                    }
                </tbody>
            </table>
            {/* rodando icon antes de carregar a tabela */}
            {isLoadingStudents && (
                <p className="mt-16 text-center">
                    <FontAwesomeIcon icon={faCircleNotch}
                        className="animate-spin w-6" />
                </p>
            )}
        </>)
}