"use client"

// import { put } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';

export default function LessonFormVercel({ handleAddLessons, onSubmit }) {

    const [subject, setSubject] = useState('');
    const [trimester, setTrimester] = useState('');
    const [data, setData] = useState('');


    const inputFileRef = useRef(null);
    const [blob, setBlob] = useState(null);
    const [isLoading, setIsLoading] = useState("")


    //    async function PUT(request) {
    //         const form = await request.formData();
    //         const file = form.get('file');
    //         const blob = await put(file.name, file, { access: 'public' });


    //         return Response.json(blob);
    //       }

    return (
        <>

            {/* <h1>Escolher Aula</h1> */}
            <form onSubmit={onSubmit} /*onSubmit={async (event) => {
                event.preventDefault();
                setIsLoading(true)

                const file = inputFileRef.current.files[0];

                const newBlob = await upload(file.name, file, {
                    access: 'public',
                    handleUploadUrl: '/api/upload',
                });
                setIsLoading(false)
                setBlob(newBlob);
            }}*/
           

            >
                <div className="max-w-wd form-lesson-container flex gap-10">
                    <div>
                        <p><label htmlFor="title">Título</label></p>
                        <input type="text" name='title' id='title' required className='w-full' />

                        <p><label htmlFor="file-url">Url da aula</label></p>
                        <input type="text"  name='file_url' id='file-url' className='w-full' />

                        <p><label htmlFor="description">Descrição</label></p>
                        <textarea name="description" id="description" className='w-full' cols="70" rows="10"></textarea>
                        {/* <button
                            disabled={isLoading}
                            className="bg-skin-cl100
                             hover:bg-skin-cl900 transition-all p-2
                             text-white disabled:bg-skin-cl700 
                             w-full mt-6 rounded-lg">

                            Adicionar
                        </button> */}
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

                        <div className='max-w-md flex flex-col'>
                            <p><label htmlFor="file">Selecione a aula</label></p>
                            <input className='w-full min-h-[200px] cursor-pointer' id='file' name="file" ref={inputFileRef} type="file" require />
                            <br /><br />
                            <button 
                             disabled={isLoading}
                                className='bg-cyan-700 hover:bg-skin-cl500 transition cursor-pointer text-white w-full
                            disabled:bg-zinc-500' type="submit">Adicionar Aula</button>
                            <button
                                className='bg-cyan-400 hover:bg-skin-cl700 transition cursor-pointer text-white w-full' type="reset">Limpar
                            </button>

                            {
                                blob && (
                                    <div className='max-w-md'>
                                        Link da Aula gerada: <a className='text-cyan-700' href={blob.url}>{blob.url}</a>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </form>
        </>
    )
}
