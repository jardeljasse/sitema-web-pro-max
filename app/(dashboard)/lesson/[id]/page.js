"use client";

import LessonForm from "@/components/LessonForm";
import PageHeader from "@/components/PageHeader";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const [lessons, setLessons] = useState();
  const [isLoadingLessons, setIsLoadingLessons] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    setIsLoadingLessons(true);
    //'params._id', chamara directamente o link que esta sendo acessado
    fetch("/api/lessons/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        setLessons(data.lessons);
        setIsLoadingLessons(false);
        // console.log(data.users)
        // router.push("/teachers")
      })
      .catch((error) => {
        alert("Ocorreu um erro tentando editar os dados do aluno(a)!" + error);
        setIsLoadingLessons(false);
      });
  }, []);

  const handleUpdateLessons = (e) =>{
    setIsLoading(true)
    //quando o formulario for submetido devera travar o reload da pagina
    e.preventDefault();

    const formData = new FormData(e.target)

    const studentData = {}
    for(const [key, value] of formData.entries()){
        studentData[key] = value
    }

        
    fetch("/api/lessons/" + params.id, { 
        method: "PATCH",
        body: JSON.stringify(studentData),
    }).then( (res) => {
        if(!res.ok){
            throw new Error("Ocorreu um erro alterando a aula " + params.title)
        } else{
            return res.json()
        }
    }).then(data => {
        alert("Aula "+ params.title + " foi alterada com Sucesso!")
        setIsLoading(false)//desativar apos o cadastro
        router.push("/lesson")
    }).catch(err => {
        alert("Ocorreu um erro alterando a aula " + params.title)
        setIsLoading(false);
    }) 
   }

  return (
    <>
      <PageHeader title="Editar e Visualizar Professor">
        Aqui voçê pode Editar e Visualizar a lista dos Alunos no sistema!
      </PageHeader>

      {lessons && (
        <section className="mt-8  flex gap-[5rem]">
          <LessonForm lessons={lessons} onSubmit={handleUpdateLessons} />

          <div>
            <ul>
              <li>
                <b>Aluno(a) cadastrado por: </b>
                {lessons.user?.firstName + " " + lessons.user?.lastName}
              </li>
              <li>
                <b>Função: </b>
                {lessons.user?.role}
              </li>
              <li>
                <b>Email do Usuário: </b>
                {lessons.user?.email}
              </li>
              <li>
                <b>Dia: </b>
                {lessons.createdAt.split("T")[0]}
              </li>
              <li>-------------------</li>
              <li>
                <b>Última Alteração: </b>
                {lessons.updatedAt.split("T")[0]}
              </li>                       
            </ul>
          </div>
        </section>
      )}

      {isLoadingLessons && (
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
