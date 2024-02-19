"use client"

import PageHeader from "@/components/PageHeader";
import ProductionForm from "@/components/ProductionForm";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page(){

    const [production, setProduction] = useState()
    const [isLoadingProduction, setIsLoadingProduction] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    const router = useRouter()

    const formatNumbers = (value) => {
        return value.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maxmumFractionDigits: 2,
        });
    };

    //evitar efeitos colaterais (side effects) 'useEffect'
   useEffect(() => {
    setIsLoadingProduction(true);
    //'params._id', chamara directamente o link que esta sendo acessado
    fetch("/api/production/" + params.id).then(
        (response) => response.json()
        ).then((data) => { 
        setProduction(data.production)
        setIsLoadingProduction(false);
        // console.log(data.users)
    }).catch((error) => {
        alert("Ocorreu um erro tentando editar a produção!")
        setIsLoadingProduction(false);
    });

   }, []);

   const handleUpdateProduction = (e) =>{
    setIsLoading(true)
    //quando o formulario for submetido devera travar o reload da pagina
    e.preventDefault();

    const formData = new FormData(e.target)

    const productionData = {}
    for(const [key, value] of formData.entries()){
        productionData[key] = value
    }

    
    // CRUD: UPDATING/ ROUTA PARA ACTUALIZA USUARIOS
    fetch("/api/production/" + params.id, { 
        method: "PATCH",//in this method, we must includ in the out URL '/api/production'
        body: JSON.stringify(productionData),
    }).then( (res) => {
        if(!res.ok){
            throw new Error("Ocorreu um erro alterando a produção com o Id: " + params.id)
        } else{
            return res.json()
        }
    }).then(data => {
        alert("Produção da Frota -"+ productionData.truckId + "- Alterada Com Sucesso!☺")
        setIsLoading(false)//desativar apos o cadastro
        router.push("/production")
    }).catch(err => {
        alert("Ocorreu um erro alterarando a produção com o Id: " + params.id)
        setIsLoading(false);
    }) 
   }

    return(
        <>
            <PageHeader title="Editar e Visualizar Produções">
              Aqui voçê pode Editar e Visualizar as produções já adicionadas no sistema!
            </PageHeader>

            
            { production && (
                <section className="mt-8 flex gap-8">
                    <ProductionForm 
                     production={production} 
                     onSubmit={handleUpdateProduction}
                     isLoading={isLoading}/>

                    <div>
                        <ul>
                            <li>
                                <b>Adiconado por: </b>
                                {production.user?.firstName + " " + production.user?.lastName}
                            </li>
                            <li>
                                <b>Email do Usuário: </b>
                                {production.user?.email}
                            </li>
                            <li>
                                <b>Criado em: </b>
                                {production.createdAt.split("T")[0]}
                            </li>
                            <li>
                                <b>Alterado em: </b>
                                {production.updatedAt.split("T")[0]}
                            </li>
                            <li>-------------------</li>
                            <li>
                                <b>Descrição: </b>
                                {production.description}
                            </li>
                            <li>
                                <b>NetMass: </b>
                                {formatNumbers(production.netMass)}/kg
                            </li>
                        </ul>
                    </div>
                </section>        
            )}    

            {isLoadingProduction && (
            <p className="mt-16 text-center">
                <FontAwesomeIcon icon={faCircleNotch} 
                className="animate-spin w-6"/>
            </p>
        )}
        </>
    )
}