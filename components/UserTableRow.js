import React from "react"
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function UserTableRow({i}){
    return (
        <tr data-index={i % 2} className="bg-zinc-300 data-[index='0']:bg-zinc-100"> 
        <td>{i}.</td>
        <td className="p-2">Jardel Jeremias Jasse</td>
        <td>jarjasse@gmail.com</td>
        <td>admin</td>
        <td>21</td>
        <td>M</td>
        <td>+(258) 811111111</td>
        <td className="flex gap-2 p-2">
            <Link href="/users/jarjasse@gmail.com" className="
            bg-sky-500 rounded-md p-1 w-8 h-8
            hover:bg-sky-600 text-zinc-900 transition-all"
            >
                <FontAwesomeIcon icon={faPencil} className="w-5"/>
            </Link>

            <button className="
            bg-red-500 rounded-md p-1 w-8 h-8
            hover:bg-sky-600 text-zinc-900 transition-all"
            >
                <FontAwesomeIcon icon={faTrash} className="w-4  "/>
            </button>
        </td>
    </tr>
    )
}