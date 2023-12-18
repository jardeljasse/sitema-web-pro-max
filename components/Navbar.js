"use client"

import { faCalendar, faRightFromBracket, faUser, faUserShield } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react";

export default function Navbar(){

    const {data: session} = useSession()
    const date = new Date();

    return(
        <nav className="bg-zinc-300 w-[calc(100%-250px)] fixed py-2 px-16 flex justify-between items-center">
            <div>
                <div>
                    <p className="flex gap-1 items-center">
                        <FontAwesomeIcon icon={faCalendar} className="w-5"/> 
                        <span className="font-bold">Data</span>
                        <span>
                           {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
                        </span>
                    </p>
                </div>
            </div>
            
            <div className="flex items-center gap-4"> 
                <p className="flex items-center">
                    <span className="flex mr-1 bg-zinc-900 rounded-full text-sky-500 w-8 h-8 items-center justify-center">
                        <FontAwesomeIcon
                        //mudancas de icones para os =! niveis de acesso 
                        icon={session?.user.role == "admin" ? faUserShield : faUser} className="w-5"/>
                    </span>
                    <Link href={"/users/" + session?.user.email} className="hover:text-sky-500 transition-all hover:-translate-y-[2px]">{session?.user.name}</Link>
                </p>
                <button
                //chamdando a função para o LogOut
                onClick={() => signOut()} 
                className="flex items-center
                hover:text-sky-500 transition-all hover:-translate-y-[2px] gap-1">
                    <FontAwesomeIcon icon={faRightFromBracket} className="w-5"/>
                    <span>Sair</span>
                </button>
            </div>
        </nav>
    );
}