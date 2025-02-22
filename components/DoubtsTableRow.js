"use client"

import React, { useState } from "react"
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export default function DoubtsTableRow({ doubt, i, handleDeleteDoubts }) {
    const [isDeleting, setIsDeleting] = useState(false)
    const { data: session } = useSession()

    const isTeacher = session?.user.role === "teacher"

    return (
        <tr
            // linha vermelha quando deletar
            data-disabled={isDeleting}
            data-index={i % 2}
            className="bg-zinc-100
            data-[index='0']:bg-zinc-200
            data-[index='0']:hover:bg-skin-cl100
            data-[disabled=true]:bg-red-300
            hover:bg-skin-cl100
            hover:text-white
            transition-all
            td-doubts"
        >
            <td>{i}.</td>
            {session?.user?.role === "student" ? (
                <td>{doubt.doubt} - <strong>({doubt.createdAt.split("T")[0]})</strong></td>
            ) : (
                <td className={isTeacher ? "italic" : ""}>{doubt.doubt}</td>
            )}
            {session?.user?.role !== "student" && (
                <>
                    <td>{doubt.createdAt.split("T")[0]}</td>
                    <td>{doubt.createdAt.split("T")[1].replace("Z", " ")}</td>
                </>
            )}
            {(session?.user.role === "admin" || session?.user.role === "teacher") && (
                <td className="flex gap-2 p-2">
                    <Link
                        href={"/doubts/" + doubt._id}
                        className="bg-sky-500 rounded-md p-1 w-8 h-8 hover:bg-sky-600 text-zinc-900 transition-all"
                    >
                        <FontAwesomeIcon icon={faPencil} className="w-5" />
                    </Link>
                    <button
                        onClick={() => handleDeleteDoubts(doubt._id, setIsDeleting)}
                        className="bg-red-500 rounded-md p-1 w-8 h-8 hover:bg-sky-600 text-zinc-900 transition-all"
                    >
                        <FontAwesomeIcon icon={faTrash} className="w-4" />
                    </button>
                </td>
            )}
        </tr>
    )
}
