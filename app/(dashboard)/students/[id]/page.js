"use client";

import PageHeader from "@/components/PageHeader";
import StudentsForm from "@/components/StudentsForm";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const [students, setStudents] = useState();
  const [isLoadingStudents, setIsLoadingStudents] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    setIsLoadingStudents(true);
    //'params._id', chamara directamente o link que esta sendo acessado
    fetch("/api/students/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        setStudents(data.students);
        setIsLoadingStudents(false);
        // console.log(data.users)
        // router.push("/teachers")
      })
      .catch((error) => {
        alert("Ocorreu um erro tentando editar os dados do aluno(a)!" + error);
        setIsLoadingStudents(false);
      });
  }, []);

  const handleUpdateStudents = (e) =>{
    setIsLoading(true)
    //quando o formulario for submetido devera travar o reload da pagina
    e.preventDefault();

    const formData = new FormData(e.target)

    const studentData = {}
    for(const [key, value] of formData.entries()){
        studentData[key] = value
    }

    
    // CRUD: UPDATING/ ROUTA PARA ACTUALIZA USUARIOS
    fetch("/api/students/" + params.id, { 
        method: "PATCH",
        body: JSON.stringify(studentData),
    }).then( (res) => {
        if(!res.ok){
            throw new Error("Ocorreu um erro alterando os dados do aluno(a) com o Identificador: " + params.id)
        } else{
            return res.json()
        }
    }).then(data => {
        alert("Dado(s) do aluno(a) com o Identificador - "+ params.id + " alterado(s) com Sucesso!")
        setIsLoading(false)//desativar apos o cadastro
        router.push("/students")
    }).catch(err => {
        alert("Ocorreu um erro tentando alterar os dados do aluno(a) com o Id: " + params.id)
        setIsLoading(false);
    }) 
   }

  return (
    <>
      <PageHeader title="Editar e Visualizar Professor">
        Aqui voçê pode Editar e Visualizar a lista dos Alunos no sistema!
      </PageHeader>

      {students && (
        <section className="mt-8  flex gap-[5rem]">
          <StudentsForm students={students} onSubmit={handleUpdateStudents} />

          <div>
            <ul>
              <li>
                <b>Aluno(a) cadastrado por: </b>
                {students.user?.firstName + " " + students.user?.lastName}
              </li>
              <li>
                <b>Função: </b>
                {students.user?.role}
              </li>
              <li>
                <b>Email do Usuário: </b>
                {students.user?.email}
              </li>
              <li>
                <b>Dia: </b>
                {students.createdAt.split("T")[0]}
              </li>
              <li>-------------------</li>
              <li>
                <b>Última Alteração: </b>
                {students.updatedAt.split("T")[0]}
              </li>                       
            </ul>
          </div>
        </section>
      )}

      {isLoadingStudents && (
        <p className="mt-6 text-center">
          <FontAwesomeIcon
            icon={faCircleNotch}
            className="animate-spin w-10 text-skin-cl100"
          />
        </p>
      )}
    </>
  );
}
