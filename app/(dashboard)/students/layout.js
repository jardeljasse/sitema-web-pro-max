"use client"

import { useSession } from 'next-auth/react'
import React from 'react'

export default function layout({children}) {
  
    // const {data: session} = useSession()

    // if(session?.user.role !== "admin"){
    //     return(
    //         <p className="bg-red-500 text-white p-2 mi-8">Área Resrvada Apenas Para Administradores</p>
    //     )
    // }
  
    return children

}
