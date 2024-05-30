"use client"

import PageHeader from '@/components/PageHeader'
import TeachersTable from '@/components/TeachersTable'
import React from 'react'

export default function page() {
  return (
    <>
    <PageHeader title="Listar Professores">
        <p>Aqui voçê pode visualizar a lista dos professores no sistema</p>
    </PageHeader>

    <section>
      <TeachersTable />
    </section>
    </>

  )
}
