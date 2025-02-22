"use client"

import { useRouter } from 'next/navigation';
import { NextResponse } from 'next/server';
import React, { useState } from 'react'

export default function LessonFormFile() {

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)

        const form = new FormData(e.target)
        // console.log(form.get("title"), form.get("description"), form.get("file"))     

        fetch("/api/upload", {
            method: "POST",
            body: form,
          })
            .then((res) => res.json())
            .then((data) => {
              alert("Upload success");
              setIsLoading(false)
            });

    };

    return (
        <>
            <form onSubmit={handleSubmit} action="">
                <div className="form-lesson-container flex gap-10">
                    <div>
                        <p><label htmlFor="title">Título</label></p>
                        <input type="text" name='title' id='title' required className='w-full'
                        />

                        {/* <p><label htmlFor="file_url">Url da aula</label></p>
                        <input type="text" required name='file_url' id='file_url' className='w-full' /> */}

                        <p><label htmlFor="description">Descrição</label></p>
                        <textarea name="description" id="description" className='w-full' cols="70"
                            rows="10"
                        ></textarea>

                        <p><label htmlFor="file">Escolher ficheiro</label></p>
                        <input type="file" required name='file' id='file' className='w-full ' />
                        <button
                            disabled={isLoading}
                            className="bg-sky-500
                            hover:bg-sky-600 transition-all p-2
                            text-white disabled:bg-zinc-500 
                            w-full mt-4">

                            Adicionar Aula
                        </button>
                        <button
                            type='reset'
                            disabled={isLoading}
                            className="bg-sky-500
                            hover:bg-sky-600 transition-all p-2
                            text-white disabled:bg-zinc-500 
                            w-full mt-4">

                           Limpar
                        </button>
                    </div>
                    {/* <div className='flex flex-col'>
                        <p><label htmlFor="subject">Selecione a Disciplina</label></p>
                        <select
                            name="subject" id="subject"
                        >
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
                        <select
                            name="trimester" id="trimester" className='w-[200px]
                            '
                        >
                            <option value="Iº Trimestre">Iº Trimestre</option>
                            <option value="IIº Trimestre">IIº Trimestre</option>
                            <option value="IIIº Trimestre">IIIº Trimestre</option>
                        </select>

                    </div> */}
                </div>
            </form>
        </>
    )
}
