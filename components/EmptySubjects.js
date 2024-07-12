import { faWarning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function EmptySubjects() {
  return (
    <div className='text-center empty-subject'>
        <FontAwesomeIcon icon={faWarning} className=' text-red-500
        text-7xl text-center'
         />
        <h1 className='text-3xl md:text-xl sm:text-xl font-bold p-2' >Desculpe, ainda não existem aulas para esta disciplina!</h1>
        <Link href={"/student-portal/"} className=' transition hover:text-red-500'>Voltar ao Menu Principal</Link>
    </div>
  )
}
