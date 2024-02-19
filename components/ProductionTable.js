"use client"

import { useEffect, useState } from "react";
import ProductionTableRow from "./ProductionTableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function ProductionTable(){

    const [production, setProduction] = useState([]);
    const [isLoadingProduction, setIsLoadingProuduction] = useState(false);

    useEffect(() => {
        setIsLoadingProuduction(true);
        fetch("/api/production").
        then((response) => response.json()).
        then((data) => {
            setProduction(data.production)
            setIsLoadingProuduction(false);
            // console.log(data.users)
        }).catch((error) => {
            alert("Ocorreu um erro, tentando listar a prdução dos camiões"+error);
            console.log(error)
            setIsLoadingProuduction(false);
        });
    }, [])// the dependecy array, ensures that the effect runs ONLY, once when the components mounts.

    const handleDeleteProduction = (id, setIsDeleting) => {
    
        setIsDeleting(true);
    
            fetch("/api/production/" + id,{ 
                method: "DELETE",
            }).then( (res) => {
                if(!res.ok){
                    throw new Error("Ocorreu um erro deletando o a produção com o Id: " + id)
                } else{
                    return res;
                    //return res.json()
                }
            }).then((data) => {
                alert("Proudução foi deletada com Sucesso!")
                setIsDeleting(false)//desativar apos o cadastro
                //router.push("/users")
                //RELOAD da Tabela apos deletar usuario

                const newProductions = production.filter((production2) => production2._id !== id);

                setProduction(newProductions);
            }).catch(err => {
                alert("Ocorreu um erro ao deletar a produção com o Id: "+ id)
                setIsDeleting(false);
            }) 
       }

    return(
        <>
        <p className="mb-4">Produções totais: {production?.length}</p>
        <table className="w-full">
            <thead className="bg-zinc-700 text-white">
                <tr className="text-left">
                    <th></th>
                    <th className="p-2">TruckIdNo</th>
                    <th>Motorista</th>
                    <th>Mass_1</th>
                    <th>Mass_2</th>
                    <th>NetMass</th>
                    <th>Data de Entrada</th>
                    <th>Data de Saída</th>
                    {/* <th>Descrição</th> */}
                    <th>Acções</th>
                </tr>
            </thead>
            <tbody>
              {/* //CRUD - READ => map() */}
              {
                production && production.map((productions, i) => {
                    return (
                        <ProductionTableRow 
                        key={productions._id} 
                        i={i + 1} 
                        productions={productions}
                        handleDeleteProduction={handleDeleteProduction}/>
                    )
                })
              }
            </tbody>
        </table>
        {isLoadingProduction && (
            <p className="mt-16 text-center">
                <FontAwesomeIcon icon={faCircleNotch} 
                className="animate-spin w-6"/>
            </p>
        )}
        </>
    )
}