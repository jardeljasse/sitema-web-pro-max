"use client"

import PageHeader from '@/components/PageHeader'
import TeachersTableRow from '@/components/TeachersTableRow'
import React from 'react'

export default function page() {
  return (
    <>
    <PageHeader title="Listar Professores">
        <p>Aqui voçê pode visualizar a lista dos professores no sistema</p>
    </PageHeader>

    <section>
      <TeachersTableRow />
    </section>
    </>

  )
}
