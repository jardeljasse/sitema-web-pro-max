import Error from 'next/error';
import Image from 'next/image';
import React, { useState } from 'react'

export default function LessonUploadFile() {

    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        setSelectedFile(file);
        if (file) {
            const url = URL.createObjectURL(file)
            setImageUrl(url)
        }
    }

    const handleSubmitFile = async (e) => {
        setIsLoading(true)
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", selectedFile)

        const response = await fetch("/api/upload", {
            method: 'POST',
            body: formData,
        }).then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
              return response.json();
            }
            throw new TypeError('Expected JSON response');
          })
          .then(data => {
            // Handle your JSON data here
          })
          .catch(error => {
            console.error('Error during file upload:', error);
            // Handle the error appropriately in your UI
          });

        try {
            const result = await response.json();
            if (result) {
                setImageUrl(result.imageUrl);
            } else {
                setErrorMessage(result.message);
                console.error("Falha ao fazer o upload do ficheiro");
            }
        } catch (error) {
            setErrorMessage("Erro ao fazer o upload do ficheiro")
            console.error("Erro ao fazer o upload do ficheiro", error)
        }
    }
    return (
        <>
            <form onSubmit={handleSubmitFile}>
                <label htmlFor="file">Selecione o ficheiro</label>
                <input type="file" name="file" id="file" onChange={handleFileChange} />
                <button
                    disabled={isLoading}
                    className="bg-sky-500
                            hover:bg-sky-600 transition-all p-2
                            text-white disabled:bg-zinc-500 
                            w-full mt-4">

                    Upload do ficheiro
                </button>
            </form>
            {
                imageUrl && (
                    <div>
                        <p>Thumbnail do ficheiro</p>
                        <Image src={imageUrl} alt="Pré-visualização do ficheiro"width={200} height={200} />
                    </div>
                )
            }
            {errorMessage && <p>{errorMessage}</p>}
        </>
    )
}
