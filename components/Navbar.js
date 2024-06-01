"use client";

import {
  faBookOpen,
  faCalendarDays,
  faHouse,
  faQuestion,
  faQuestionCircle,
  faReply,
  faUser,
  faUserGraduate,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import "../app/globals.css";

export default function Navbar() {
  const { data: session } = useSession();
  const date = new Date();

  return (
    <nav className="bg-skin-cl100 bg-gray-900 w-full sticky top-0 py-3 px-16 flex justify-between items-center text-white">
      <div>
        <div>
          <p className="flex gap-1 items-center">
            <FontAwesomeIcon icon={faCalendarDays} className="w-6" />
            <span className="font-bold">Data</span>
            <span>
              {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
            </span>
          </p>
        </div>
      </div>

      <div className="flex gap-6">
        <p>
            <FontAwesomeIcon icon={faHouse} className="w-6" />
            <Link href={"/student-portal"} className="hover:text-skin-cl900 transition-all hover:-translate-y-[2px]">Principal</Link>
        </p>
        <p>
            <FontAwesomeIcon icon={faBookOpen} className="w-6" />
            <Link href={"/student-portal/library"} className="hover:text-skin-cl900 transition-all hover:-translate-y-[2px]">Biblioteca</Link>
        </p>
        <p>
            <FontAwesomeIcon icon={faQuestionCircle} className="w-6" />
            <Link href={"/Home"} className="hover:text-skin-cl900 transition-all hover:-translate-y-[2px]">Ajuda</Link>
        </p>
      </div>

      <div className="flex items-center gap-4 ">
        <p className="flex items-center">
          <span className="flex mr-1 bg-skin-cl900 rounded-full text-sky-500 w-8 h-8 items-center justify-center">
            <FontAwesomeIcon
              //mudancas de icones para os =! niveis de acesso
              icon={session?.user.role == "admin" ? faUserShield : faUser }
              
              className="w-6"
            />
          </span>
          <Link
            href={"/users/" + session?.user.email}
            className="hover:text-skin-cl900 min-w-[150px] font-bold transition-all"
          >
            {session?.user.name}
          </Link>
        </p>
        <button
          //chamdando a função para o LogOut
          onClick={() => signOut()}
          className="flex items-center
                hover:text-sky-900 transition-all hover:-translate-y-[2px] gap-1"
        >
          <FontAwesomeIcon icon={faReply} className="w-6" />
          <span>Sair</span>
        </button>
      </div>
    </nav>
  );
}
