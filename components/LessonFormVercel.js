"use client"

// import { put } from '@vercel/blob';
import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';

export default function LessonFormVercel() {

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
            <form
                onSubmit={async (event) => {
                    event.preventDefault();
                    setIsLoading(true)

                    const file = inputFileRef.current.files[0];

                    const newBlob = await upload(file.name, file, {
                        access: 'public',
                        handleUploadUrl: '/api/upload',
                    });
                    setIsLoading(false)
                    setBlob(newBlob);
                }}
            >
                <div className='max-w-md flex flex-col'>
                <p><label htmlFor="file">Selecione a aula</label></p>
                    <input className='w-full min-h-[200px] cursor-pointer' id='file' name="file" ref={inputFileRef} type="file" required />
                    <br /><br />
                    <button disabled={isLoading}
                        className='bg-cyan-700 cursor-pointer text-white w-full
                     disabled:bg-zinc-500' type="submit">Upload</button>
                    <button
                        className='bg-cyan-400 cursor-pointer text-white w-full
                ' type="reset">Limpar</button>

            {
                blob && (
                    <div className='max-w-md'>
                        Link da Aula gerada: <a className='text-cyan-700' href={blob.url}>{blob.url}</a>
                    </div>
                )
            }
                </div>
            </form>
        </>
    )
}
