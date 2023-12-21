"use client"

import PageHeader from "@/components/PageHeader";
import ProductionForm from "@/components/ProductionForm";
import { setConfig } from "next/config";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function page(){

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleAddProduction = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const productionData = {};
        for(const [key, value] of formData.entries()){
            productionData[key] = value;
        }

        fetch("/api/production",{
            method: "POST",
            body: JSON.stringify(productionData),
        }).then((response) => {
            if(!response.ok){
                throw new Error("Ocorreu um erro adicionado a produção");
            }else{
                return response.json();
            }
        }).then((data) => {
            alert("Produção do Camião" + productionData.truckId + " adicionado com sucesso!");
            setIsLoading(false);
            //router.push("/production");
        }).catch((error) => {
            alert("Ocorreu um erro adicionando a produção do Camião " +productionData.truckId);
            setIsLoading(false);
        })
    }

    return(
        <>
            <PageHeader title="Registo da Produção">
            <p>Aqui voçê pode Registar a Produção diária da Empresa</p>
            </PageHeader>

            <section className="mt-8">
               {/* Importing the 'Form' */}
               <ProductionForm onSubmit={handleAddProduction} isLoading={isLoading}/>
            </section>
        </>
    )
};