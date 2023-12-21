import PageHeader from "@/components/PageHeader"
import ProductTableRow from "@/components/ProductTableRow"

import React from "react"

export default function page(){
    return(
        <>
         <PageHeader title="Listar Frotas">
         <p>Aqui voçê pode listar e visulizar as Frotas Cadastradas</p>
         </PageHeader>

        <section className="mt-8">
        <p className="mb-4">Usuários totais: 8</p>
        <table className="w-full">
            <thead className="bg-zinc-700 text-white">
                <tr className="text-left">
                    <th></th>
                    <th className="p-2">Nome</th>
                    <th>Categoria</th>
                    <th>Qtd</th>
                    <th>Custo(MZN)</th>
                    <th>Custo/Total</th>
                    <th>Preço(MZN)</th>
                    <th>Preço Total(MZN)</th>
                    <th>Acções</th>
                    
                </tr>
            </thead>
            <tbody>
               <ProductTableRow i={1}/> 
               <ProductTableRow i={2}/> 
               <ProductTableRow i={3}/> 
            </tbody>
        </table>
    </section> 
        </>
    )
}