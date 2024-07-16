"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  faBookOpen,
  faBookOpenReader,
  faChalkboardTeacher,
  faList,
  faPlusCircle,
  faReceipt,
  faSpinner,
  faUserGraduate,
  faUsersViewfinder,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarItem from "./SidebarItem";
import { useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();

  return (
    <aside className="bg-skin-cl700 h-full p-4 w-[250px] text-white fixed">
      <Link className="text-xl text-center" href="/">
        <Image
          src="/images/sen-logo-white.png"
          width={170}
          height={170}
          className="block mx-auto mt-2"
        />
      </Link>

      <nav className="mt-10">
        <ul>
          {items.map((item, i) => {
            if (
              session?.user.role === "teacher" &&
              (item.name === "Dúvidas" ||
                item.name === "Alunos" ||
                item.name === "Adicionar Aula" ||
                item.name === "Ver Progresso" ||
                item.name === "Manual do Sistema"
              )
            ) {
              return <SidebarItem item={item} key={i} />;
            } else if (
              session?.user.role === "admin" &&
              (item.name === "Usuários" ||
                item.name === "Alunos" ||
                item.name === "Professor")
            ) {
              return <SidebarItem item={item} key={i} />;
            } else if(session?.user.role === "teacher" && item.subMenus.name === "Cadastrar Aluno"){
              return;
            }else{
              return;
            }
          })}
        </ul>
      </nav>
    </aside>
  );
}
const items = [
  {
    name: "Usuários",
    icon: faUsersViewfinder,
    subMenus: [
      {
        name: "Cadastrar Usuário",
        href: "/users/create",
      },
      {
        name: "Ver Usuários",
        href: "/users",
      },
    ],
  },
  {
    name: "Alunos",
    icon: faUserGraduate,
    subMenus: [
      {
        name: "Cadastrar Aluno",
        href: "/students/create",
      },
      {
        name: "Ver Alunos",
        href: "/students",
      },
    ],
  },
  {
    name: "Professor",
    icon: faChalkboardTeacher,
    subMenus: [
      {
        name: "Cadastrar Professor",
        href: "/teachers/create",
      },
      {
        name: "Ver Professores",
        href: "/teachers",
      },
    ],
  },
  {
    name: "Dúvidas",
    icon: faBookOpenReader,
    subMenus: [
      {
        name: "Verificar & Responder Dúvidas",
        href: "/doubts",
      },
      // {
      //   name: "Responder Dúvida",
      //   href: "/doubts/create",
      // },
    ],
  },
  {
    name: "Adicionar Aula",
    icon: faPlusCircle,
    subMenus: [
      {
        name: "Criar Aula",
        href: "/lesson/create",
      },
      {
        name: "Listar Aulas",
        href: "/lesson",
      },
      {
        name: "Portal do Aluno",
        href: "/student-portal",
      },
    ],
  },
  {
    name: "Ver Progresso",
    icon: faSpinner,
    subMenus: [
      {
        name: "Listar Progresso",
        href: "/progress",
      },
    ],
  },
  {
    name: "Manual do Sistema",
    icon: faBookOpenReader,
    subMenus: [
      {
        name: "Ler | Baixar",
        href: "https://drive.google.com/file/d/1kN0c6w5MRdfmTC2h2dQSrXzo_aSmBCIo/view?usp=sharing",
      },
    ],
  },
  // {
  //   name: "Gerar Relatório",
  //   icon: faReceipt,
  //   subMenus: [
  //     {
  //       name: "Criar Relatório",
  //       href: "/create/report",
  //     },
  //     {
  //       name: "Listar Relatório",
  //       href: "/reports",
  //     },
  //   ],
  // },
];
