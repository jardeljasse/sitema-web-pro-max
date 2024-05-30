import React, { useState } from "react"
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function TeachersTableRow({teacher, i, handleDeleteUser}){

    const calculateAge = (birthDay) => {

        const date = new Date()
        const birthdayDate = new Date(birthDay)
        const age = Math.abs(date.getUTCFullYear() - birthdayDate.getUTCFullYear());
        return age;
    };

    const [isDeleting, setIsDeleting] = useState(false)

    return (
        <tr 
            //linha vermelha quando deletar
            data-disabled={isDeleting}
            data-index={i % 2} 
            className="bg-zinc-100
            data-[index='0']:bg-zinc-200
            data-[disabled=true]:bg-red-300"> 
            <td>{i}.</td>
            <td className="p-2">{teacher.name}</td>
            <td>{calculateAge(teacher.birthDay)}</td>
            <td>{teacher.nacionality}</td>
            <td>{teacher.province}</td>
            <td>{teacher.formation}</td>
            <td>{teacher.gender}</td>
            <td>{teacher.subject}</td>
            <td>{teacher.contact}</td>            
            
            <td className="flex gap-2 p-2">
                <Link href={"/teachers/" + teacher._id} className="
                bg-sky-500 rounded-md p-1 w-8 h-8
                hover:bg-sky-600 text-zinc-900 transition-all"
                >
                    <FontAwesomeIcon icon={faPencil} className="w-5"/>
                </Link>
                {/* CRUD: DELETING */}
                <button
                // onClick={() => handleDeleteUser(user.email, setIsDeleting)} 
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