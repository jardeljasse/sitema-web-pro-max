"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import DoubtsForm from "./DoubtsForm";
import { useRouter } from "next/navigation";
import DoubtsTable from "./DoubtsTable";

export default function TabLesson() {

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const [lessons, setLessons] = useState([])
    const [isLoadingLessons, setIsLoadingLessons] = useState(false)

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
            // router.push("/doubts")
        }).catch(err => {
            alert("Ocorreu um erro ao tentar responder à dúvida do aluno "+ doubtsData.name)
            setIsLoading(false);
        }) 
    }

    useEffect(() => {
        const tabs = document.querySelectorAll(".tab-btn");
        const elContentItem = document.querySelectorAll(".content-item");
        // tab.addEventListener("click", handleClick);


        tabs.forEach((tab, i) => {
            tab.addEventListener("click", (e) => {
                tabs.forEach(tab => { tab.classList.remove("active-tab") })
                tab.classList.add("active-tab");

                // var line = document.querySelector(".line");
                // line.style.width = e.target.offsetWidth + "px";
                // line.style.left = e.target.offsetWidth + "px";

                elContentItem.forEach(content => { content.classList.remove("active-tab") })
                elContentItem[i].classList.add("active-tab");
            });
        })

    }, []);

    return (
        <div className="container-tab">
            <div className="tab-box">
                <button className="tab-btn md:text-lg sm:text-[16px]">Transcrição</button>
                <button className="tab-btn md:text-lg sm:text-[16px]">Dúvida</button>
                <button className="tab-btn md:text-lg sm:text-[16px]">Resposta(s)</button>
            </div>
            <div className="content-box">
                <div className="content-item">
                    <h2>Transcrição</h2>
                    <p className="text-xl">                    
                    {/* {lessons?.description} */}
                    O currículo vitae (CV) é um documento detalhado que resume a trajetória profissional e acadêmica de uma pessoa. Ele inclui informações como formação educacional, experiência de trabalho, habilidades, publicações, prêmios, e outras realizações relevantes. Ao contrário de um resumo, que é geralmente mais curto e conciso, o CV pode ser mais extenso e detalhado, especialmente para profissionais em áreas acadêmicas ou científicas onde é importante demonstrar publicamente uma ampla gama de atividades e conquistas
                    {/* {alert(lessons)} */}
                    </p>
                </div>


                <div className="content-item doubt">
                    <h2>Dúvida</h2>
                    <DoubtsForm onSubmit={handleAddDoubts} isLoading={isLoading} />
                </div>


                <div className="content-item">
                    <h2>Resposta(s)</h2>
                    {/* <p className="italic mb-8">
                        Não entendi o que é um curriculum Vitae, tornar a me explicar?
                    </p> */}
                    <p>
                        <DoubtsTable />
                    </p>
                </div>
            </div>

        </div>
    )
}
