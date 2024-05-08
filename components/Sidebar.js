"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  faBookOpen,
  faBookOpenReader,
  faPlusCircle,
  faReceipt,
  faSpinner,
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
          src="/images/sen-logo.png"
          width={150}
          height={150}
          className="block mx-auto mt-4"
        />
      </Link>

      <nav className="mt-10">
        <ul>
          {items.map((item, i) => {
            //niveis de acesso, ocultando e retornando no <SidebarItem />
            if (session?.user.role != "admin" && item.name == "Usuários") {
              return;
            } else {
              return <SidebarItem item={item} />;
            }
          })}
        </ul>
      </nav>
    </aside>
  );
}
// const items = [
//     {
//         name: "Usuários",
//         icon: faUsers,
//         //criando sub-menus
//         subMenus: [
//             {
//                 name: "-Criar Usuário",
//                 href: "/users/create"
//             },
//             {
//                 name: "-Listar Usuários",
//                 href: "/users"
//             }
//         ]
//     },
//     // {
//     //     name: "Funcionário",
//     //     icon: faCartShopping,
//     //     subMenus: [
//     //         {
//     //             name: "-Cadastrar Funcionário",
//     //             //name: "-Semanal",
//     //             href: "/products/create"
//     //         },
//     //         {
//     //             name: "-Listar Funcionário",
//     //             href: "/products"
//     //         }
//     //     ]
//     // },
//      {
//          name: "Camiões",
//         icon: faTruckFast,
//         subMenus: [
//              {
//                  name: "-Cadastrato de Frota",
//                  href: "/trucks/create"
//              },
//              {
//                  name: "-Lista de Frotas",
//                  href: "/trucks"
//              }
//          ]
//      },
//     // {
//     //     name: "Fornecedores",
//     //     icon: faUsers,
//     //     subMenus: [
//     //         {
//     //             name: "-Criar Usuário",
//     //             href: "/user/creat"
//     //         },
//     //         {
//     //             name: "-Listar Usuários",
//     //             href: "/users"
//     //         }
//     //     ]
//     // },
//     {
//         name: "Proudução",
//         icon: faWarehouse,
//         subMenus: [
//             {
//                 name: "-Diária",
//                 href: "/production/create"
//             },
//             {
//                 name: "-Listar Produção",
//                 href: "/production"
//             }
//         ]
//       },
//     // {
//     //     name: "Finanças",
//     //     icon: faWarehouse,
//     //     subMenus: [
//     //         {
//     //             name: "-Folha de salário",
//     //             href: "/user/creat"
//     //         },
//     //         {
//     //             name: "-Folha de pagamento",//-> contas a pagar
//     //             href: "/user/creat"
//     //         },
//     //         {
//     //             name: "-Listar Produção",
//     //             href: "/users"
//     //         }
//     //     ]
//     // },
//     // {
//     //     name: "Administração",
//     //     icon: faWarehouse,
//     //     subMenus: [
//     //         {
//     //             name: "-Folha de salário",
//     //             href: "/user/creat"
//     //         },
//     //         {
//     //             name: "-Folha de pagamento",//-> contas a pagar
//     //             href: "/user/creat"
//     //         },
//     //         {
//     //             name: "-Listar Produção",
//     //             href: "/users"
//     //         }
//     //     ]
//     // }
// ]
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
    icon: faBookOpen,
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
    name: "Dúvidas",
    icon: faBookOpenReader,
    subMenus: [
      {
        name: "Verificar Dúvidas",
        href: "/doubts",
      },
      {
        name: "Responder Dúvida",
        href: "/create/doubts",
      },
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
    name: "Gerar Relatório",
    icon: faReceipt,
    subMenus: [
      {
        name: "Criar Relatório",
        href: "/create/report",
      },
      {
        name: "Listar Relatório",
        href: "/reports",
      },
    ],
  },
];
