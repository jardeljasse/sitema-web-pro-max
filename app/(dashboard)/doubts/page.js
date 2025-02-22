import DoubtsTable from '@/components/DoubtsTable'
import PageHeader from '@/components/PageHeader'
import React from 'react'

export default function page() {
    return (
        <>
            <PageHeader title="Visualizar e responder Dúvidas">
                <p>Aqui voçê pode visualizar e responder às dúvidas enviadas pelos alunos</p>
            </PageHeader>

            <section className="mt-8">
                <DoubtsTable />
            </section>
        </>
    )
}
