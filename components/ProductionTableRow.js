"use client"

import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import React, { useState } from "react"

// HERE WE UPLOAD THE TABLE VALUE CRUD - R
export default function ProductionTableRow({i, productions, handleDeleteProduction}){

    const formatNumbers = (value) => {
        return value.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    }

    const date = new Date();

   const [isDeleting, setIsDeleting] = useState(false);

    return (
        <tr 
            data-disabled={isDeleting}
            data-index={i % 2} 
            className="bg-zinc-300 data-[index='0']:bg-zinc-100 data-[disabled=true]:br-red-300"> 
            <td>{i}.</td>
            <td className="p-1">{productions.truckId}</td>
            <td>{productions.driver}</td>
            <td>{formatNumbers(productions.mass1)}</td>
            <td>{formatNumbers(productions.mass2)}</td>
            <td>{formatNumbers(productions.netMass)}</td>
            <td>{productions.createdAt.split(".")[0]}</td>
            <td>{productions.updatedAt.split(".")[0]}</td>
            {/* <td>{productions.dateOut.split("T")[0]}</td> */}
            {/* <td>{productions.description}</td> */}
            <td className="flex gap-2 p-2">
                <Link href={"/production/"+productions._id} className="
                bg-sky-500 rounded-md p-1 w-8 h-8
                hover:bg-sky-600 text-zinc-900 transition-all ml-2">
                    <FontAwesomeIcon icon={faPencil} className="w-5"/>
                </Link>

                <button 
                 onClick={() => handleDeleteProduction(productions._id, setIsDeleting)}
                 className="
                 bg-red-500 rounded-md p-1 w-8 h-8
                 hover:bg-sky-600 text-zinc-900 transition-all">
                 <FontAwesomeIcon icon={faTrash} className="w-4  "/>
                </button>
            </td>
        </tr>
 
    )
}