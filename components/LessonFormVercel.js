'use client';

import { upload } from '@vercel/blob/client';
import { useState, useRef } from 'react';

export default function LessonFormVercel() {

  const [isLoading, setIsLoading] = useState(false)
  const inputFileRef = useRef(null);
  const [blob, setBlob] = useState(null);
  return (
    <>
      {/* <h1>Upload Your Avatar</h1> */}

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const file = inputFileRef.current.files[0];

          const newBlob = await upload(file.name, file, {
            access: 'public',
            handleUploadUrl: '/api/upload',
          });

          setBlob(newBlob);
          setIsLoading(true)
        }}
      >
        <p>
          <label htmlFor="file" className='block'>Selecionar aula</label>
          <input name="file" id='file' ref={inputFileRef} className='max-w-md' type="file" required />
          </p>
        <button
          disabled={isLoading}
          className='
        disabled:bg-skin-cl700p-1 w-full bg-cyan-700 text-white' type="submit">Upload</button>
      </form>
      {blob && (
        <div>
          Blob url: <a href={blob.url}>{blob.url}</a>
        </div>
      )}
    </>
  );
}