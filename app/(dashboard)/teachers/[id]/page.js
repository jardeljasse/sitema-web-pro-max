"use client";

import PageHeader from "@/components/PageHeader";
import TeachersForm from "@/components/TeachersForm";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const [teachers, setTeachers] = useState();
  const [isLoadingTeachers, setIsLoadingTeachers] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    setIsLoadingTeachers(true);
    //'params._id', chamara directamente o link que esta sendo acessado
    fetch("/api/teachers/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        setTeachers(data.teachers);
        setIsLoadingTeachers(false);
        // console.log(data.users)
        // router.push("/teachers")
      })
      .catch((error) => {
        alert("Ocorreu um erro tentando editar os dados do professor!" + error);
        setIsLoadingTeachers(false);
      });
  }, []);

  const handleUpdateTeachers = (e) =>{
    setIsLoading(true)
    //quando o formulario for submetido devera travar o reload da pagina
    e.preventDefault();

    const formData = new FormData(e.target)

    const teachersData = {}
    for(const [key, value] of formData.entries()){
        teachersData[key] = value
    }

    
    // CRUD: UPDATING/ ROUTA PARA ACTUALIZA USUARIOS
    fetch("/api/teachers/" + params.id, { 
        method: "PATCH",
        body: JSON.stringify(teachersData),
    }).then( (res) => {
        if(!res.ok){
            throw new Error("Ocorreu um erro alterando os dados do professor(a) com o Email: " + params.id)
        } else{
            return res.json()
        }
    }).then(data => {
        alert("Dado(s) do professor(a) com o Identificador - "+ params.id + " alterado(s) com Sucesso!")
        setIsLoading(false)//desativar apos o cadastro
        router.push("/teachers")
    }).catch(err => {
        alert("Ocorreu um erro tentando alterar os dados do professor(a) com o Id: " + params.id)
        setIsLoading(false);
    }) 
   }


  return (
    <>
      <PageHeader title="Editar e Visualizar Professor">
        Aqui voçê pode Editar e Visualizar a lista dos Professores no sistema!
      </PageHeader>

      {teachers && (
        <section className="mt-8  flex gap-[5rem]">
          <TeachersForm teachers={teachers} onSubmit={handleUpdateTeachers} />

          <div>
            <ul>
              <li>
                <b>Professor(a) cadastrado por: </b>
                {teachers.user?.firstName + " " + teachers.user?.lastName}
              </li>
              <li>
                <b>Função: </b>
                {teachers.user?.role}
              </li>
              <li>
                <b>Email do Usuário: </b>
                {teachers.user?.email}
              </li>
              <li>
                <b>Dia: </b>
                {teachers.createdAt.split("T")[0]}
              </li>
              <li>-------------------</li>
              <li>
                <b>Última Alteração: </b>
                {teachers.updatedAt.split("T")[0]}
              </li>                       
            </ul>
          </div>
        </section>
      )}

      {isLoadingTeachers && (
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
