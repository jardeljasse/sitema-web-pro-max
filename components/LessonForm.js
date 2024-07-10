"use client"

import React, { useState } from 'react'

export default function LessonForm({onSubmit, isLoading}) {

    // const [isLoading, setIsLoading] = useState(false)

    const [subject, setSubject] = useState('');
    const [trimester, setTrimester] = useState('');
    const [data, setData] = useState('');

    return (
        <>
            <form onSubmit={onSubmit} action="">
                <div className="form-lesson-container flex gap-10">
                    <div>
                        <p><label htmlFor="title">Título</label></p>
                        <input type="text" name='title' id='title' required className='w-full' />

                        <p><label htmlFor="file_url">Url da aula</label></p>
                        <input type="text" required name='file' id='file_url' className='w-full' />

                        <p><label htmlFor="description">Descrição</label></p>
                        <textarea name="description" id="description" className='w-full' cols="70" rows="10"></textarea>
                        <button
                            disabled={isLoading}
                            className="bg-skin-cl100
                             hover:bg-skin-cl900 transition-all p-2
                             text-white disabled:bg-skin-cl700 
                             w-full mt-6 rounded-lg">

                            Adicionar Aula
                        </button>
                    </div>
                    <div className='flex flex-col'>
                        <p><label htmlFor="subject">Selecione a Disciplina</label></p>
                        <select onChange={(e) => setSubject(e.target.value)}
                        name="subject" id="subject">
                            <option value="Português">Português</option>
                            <option value="Matemática">Matemática</option>
                            <option value="Inglês">Inglês</option>
                            <option value="História">História</option>
                            <option value="Biologia">Biologia</option>
                            <option value="Física">Física</option>
                            <option value="Química">Química</option>
                            <option value="Ed.Visual">Ed.Visual</option>
                        </select>
                        <p><label htmlFor='trimester'>Selecione o Trimestre</label></p>
                        <select onChange={(e) => setTrimester(e.target.value)}
                        name="trimester" id="trimester" className='w-[200px]'>
                            <option value="Iº Trimestre">Iº Trimestre</option>
                            <option value="IIº Trimestre">IIº Trimestre</option>
                            <option value="IIIº Trimestre">IIIº Trimestre</option>
                        </select>
                        
                    </div>
                </div>
            </form>
        </>
    )
}
