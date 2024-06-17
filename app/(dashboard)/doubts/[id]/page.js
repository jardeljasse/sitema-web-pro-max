"use client";

import DoubtsForm from "@/components/DoubtsForm";
import PageHeader from "@/components/PageHeader";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const [doubts, setDoubts] = useState();
  const [isLoadingDoubts, setIsLoadingDoubts] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const params = useParams();

  const handleAddDoubts = (e) =>{
    setIsLoading(true)
    //quando o formulario for submetido devera travar o reload da pagina
    e.preventDefault();

    const formData = new FormData(e.target)

    const doubtsData = {}
    for(const [key, value] of formData.entries()){
        doubtsData[key] = value
    }


    fetch("/api/doubts",{ 
        method: "POST",
        body: JSON.stringify(doubtsData),
    }).then( (res) => {
        if(!res.ok){
            throw new Error("Ocorreu um erro ao tentar responder à dúvida do aluno "+ doubtsData.name)
        } else{
            return res.json()
        }
    }).then((data) => {
        alert("Dúvida "+ doubtsData.name + " respondida com Sucesso!")
        setIsLoading(false)//desativar apos o cadastro
        router.push("/doubts")
    }).catch(err => {
        alert("Ocorreu um erro ao tentar responder à dúvida do aluno "+ doubtsData.name)
        setIsLoading(false);
    }) 
}

  useEffect(() => {
    setIsLoadingDoubts(true);
    //'params._id', chamara directamente o link que esta sendo acessado
    fetch("/api/doubts/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        setDoubts(data.doubts);
        setIsLoadingDoubts(false);
        // console.log(data.users)
        // router.push("/teachers")
      })
      .catch((error) => {
        alert("Ocorreu um erro tentando responder a esta dúvuda!" + error);
        setIsLoadingDoubts(false);
      });
  }, []);
  return (
    <>
      <PageHeader title="Responder às dúvidas">
        Aqui voçê pode Respoder as dúvidas dos alunos!
      </PageHeader>

      {doubts && (
        <section className="mt-8  flex gap-[5rem]">
          <div className="doubts-box h-[50%] w-[30%]">
          {/* <DoubtsForm doubts={doubts} /> */}
          {doubts?.doubt}
          </div>

          <div className="w-[500px]">
            <ul>
              <li>
                <b>Dúvida enviada pelo aluno(a): </b>
                {doubts.user?.firstName + " " + doubts.user?.lastName}
              </li>              
              <li>
                <b>Email do Aluno: </b>
                {doubts.user?.email}
              </li>
              <li>
                <b>Dia: </b>
                {doubts.createdAt.split("T")[0]}
              </li>
              <li>-------------------</li>
              <li>
                <b>Última Alteração: </b>
                {doubts.updatedAt.split("T")[0]}
              </li>                       
            </ul>
            <DoubtsForm onSubmit={handleAddDoubts} isLoading={isLoading} />
          </div>
        </section>
      )}

      {isLoadingDoubts && (
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
