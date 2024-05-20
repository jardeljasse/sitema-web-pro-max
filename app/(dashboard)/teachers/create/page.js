import PageHeader from '@/components/PageHeader'
import TeachersForm from '@/components/TeachersForm'
import React from 'react'

export default function page() {
  return (
    <>
    <PageHeader title="Cadastrar Professor">
        <p>Aqui voçê pode cadastrar um professor ao sistema</p>
    </PageHeader>
    <section>
        <TeachersForm />
    </section>
    </>
  )
}
