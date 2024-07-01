"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSession } from "next-auth/react";
import Link from "next/link"
import React, { useState } from "react"

export default function SidebarItem({item}){

    const [open, setOpen] = useState(false)
    const { data: session } = useSession();

    return (
            <li className="border-b border-dashed cursor-pointer">
                <p 
                onClick={() => setOpen(!open)} 

                className="p-2 flex justify-between hover:bg-skin-cl500">
                    <span className="flex items-center gap-1">
                        <FontAwesomeIcon icon={item.icon} className="w-5"/>
                        {item.name}
                    </span>
                    <FontAwesomeIcon
                        data-hidden={open} 
                        icon={faChevronDown} 
                        className="w-4  data-[hidden=true]:rotate-180 transition-all"
                    />
                </p>
                <ul data-hidden={open} 
                    className="hidden data-[hidden=true]:block">                    
                    {
                        item.subMenus.map((subMenu) => {
                            
                                if(session?.user.role === "teacher" && subMenu.name === "Cadastrar Aluno"){
                                    return;
                                }else{
                                    
                                    return <li className="hover:bg-skin-cl500 pl-6 py-1">
                                    - <Link href={subMenu.href}>{subMenu.name}</Link>
                                </li>
                                }
                            
                        })
                    }
                </ul>
            </li>
    )
}