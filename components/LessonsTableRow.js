import React, { useState } from "react"
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function LessonsTableRow({lessons, i, handleDeleteLessons}){


    const [isDeleting, setIsDeleting] = useState(false)

    return (
        <tr 
            //linha vermelha quando deletar
            data-disabled={isDeleting}
            data-index={i % 2} 
            className="bg-zinc-100
            data-[index='0']:bg-zinc-200
            data-[index='0']:hover:bg-skin-cl100
            data-[disabled=true]:bg-red-300
            hover:bg-skin-cl100
            hover:text-white
            transition-all"> 
            <td>{i}.</td>
            {/* <td>{lessons.subject}</td> */}
            <td className="p-2">{lessons.title}</td>
            {/* <td className="border-r">{lessons.trimester}</td> */}
            <td className='w-[600px] text-justify'>{lessons.description}</td>
            <td className="flex gap-2 p-2">
                <Link href={"/lesson/" + lessons._id} className="
                bg-sky-500 rounded-md p-1 w-8 h-8
                hover:bg-sky-600 text-zinc-900 transition-all"
                >
                    <FontAwesomeIcon icon={faPencil} className="w-5"/>
                </Link>
                {/* CRUD: DELETING */}
                <button
                onClick={() => handleDeleteLessons(lessons._id, setIsDeleting)}
                className="
                bg-red-500 rounded-md p-1 w-8 h-8
                hover:bg-sky-600 text-zinc-900 transition-all"
                >
                    <FontAwesomeIcon icon={faTrash} className="w-4  "/>
                </button>
            </td>
        </tr>
    )
}