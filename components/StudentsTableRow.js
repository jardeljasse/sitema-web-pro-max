import React, { useState } from "react"
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function StudentsTableRow({student, i, handleDeleteUser}){

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
            <td className="p-2">{student.name}</td>
            <td>{calculateAge(student.birthDay)}</td>
            <td>{student.nacionality}</td>
            <td>{student.bornPlace}</td>
            <td>{student.gender}</td>
            <td>{student.city}</td>
            <td>{student.neighbornhood}</td>
            <td>{student.sponsorContact}</td>
            <td>{student.healthExame}</td>
            <td>{student.desease}</td>
            
            <td className="flex gap-2 p-2">
                <Link href={"/"} /*href={"/users/" + user.email}*/ className="
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