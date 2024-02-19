import PageHeader from "@/components/PageHeader"
import ProductTableRow from "@/components/ProductionTableRow"
import ProductionTable from "@/components/ProductionTable"

import React from "react"

export default function page(){
    return(
        <>
         <PageHeader title="Listagem das Produções">
         <p>Aqui voçê pode listar e visulizar todas as produções registadas no banco de dados</p>
         </PageHeader>

        <section className="mt-8">
            <ProductionTable />
        </section> 
        </>
    )
}