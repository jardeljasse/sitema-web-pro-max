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
      })
      .catch((error) => {
        alert("Ocorreu um erro tentando editar os dados do professor!" + error);
        setIsLoadingTeachers(false);
      });
  }, []);
  return (
    <>
      <PageHeader title="Editar e Visualizar Professor">
        Aqui voçê pode Editar e Visualizar a lista dos Professores no sistema!
      </PageHeader>

      {teachers && (
        <section className="mt-8  flex gap-[5rem]">
          <TeachersForm teachers={teachers} />

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
