import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import React from "react"
export default function ProductTableRow({i}){
    return (
        <tr data-index={i % 2} className="bg-zinc-300 data-[index='0']:bg-zinc-100"> 
        <td>{i}.</td>
        <td className="p-2">Samsung Galxy S23</td>
        <td>Telefones</td>
        <td>78</td>
        <td>78</td>
        <td>40.000</td>
        <td>785.000</td>
        <td>2000001</td>
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