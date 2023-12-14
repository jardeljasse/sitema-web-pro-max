import React from "react"
import Link from "next/link"
import Image from "next/image"
import { faCartShopping, faChevronDown, faMoneyBill, faTruckFast, faUsers, faWarehouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SidebarItem from "./SidebarItem"

export default function Sidebar(){
    return(
        <aside className="bg-green-900 h-full p-4 w-[250px] text-white fixed">
            <Link href="/">
              <Image src="/images/logo-sistema-web-pro-max.png" 
              width={150} 
              height={150}
              className="block mx-auto"
              />
            </Link>
        
            <nav className="mt-8">
              <ul>
                {
                 items.map((item, i) => {
                    return (
                        <SidebarItem item={item}/>
                    )
                 })   
                }
              </ul>
            </nav>
          </aside>
    )
}
const items = [
    {
        name: "Usuários",
        icon: faUsers,
        //criando sub-menus
        subMenus: [
            {
                name: "-Criar Usuário",
                href: "/users/create"
            },
            {
                name: "-Listar Usuários",
                href: "/users"
            }
        ]
    },
    {
        name: "Produção",
        icon: faCartShopping,
        subMenus: [
            {
                name: "-Diária",
                //name: "-Semanal",
                href: "/products/create"
            },
            {
                name: "-Listar Productos",
                href: "/products"
            }
        ]
    },
    {
        name: "Facturas",
        icon: faMoneyBill,
        subMenus: [
            {
                name: "-Criar Productos",
                href: "/user/creat"
            },
            {
                name: "-Listar Usuários",
                href: "/users"
            }
        ]
    },
    {
        name: "Fornecedores",
        icon: faTruckFast,
        subMenus: [
            {
                name: "-Criar Usuário",
                href: "/user/creat"
            },
            {
                name: "-Listar Usuários",
                href: "/users"
            }
        ]
    },
    {
        name: "Armázens",
        icon: faWarehouse,
        subMenus: [
            {
                name: "-Criar Usuário",
                href: "/user/creat"
            },
            {
                name: "-Listar Usuários",
                href: "/users"
            }
        ]
    }
]