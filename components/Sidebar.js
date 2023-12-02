import React from "react"
import Link from "next/link"
import Image from "next/image"
import { faCartShopping, faChevronDown, faMoneyBill, faTruckFast, faUsers, faWarehouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Sidebar(){
    return(
        <aside className="bg-zinc-900 h-full p-4 w-[250px] text-white fixed">
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
                        <li className="border-b border-dashed cursor-pointer">
                            <p className="p-2 flex justify-between hover:bg-zinc-800">
                                <span className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={item.icon} className="w-5"/>
                                    {item.name}
                                </span>
                                <FontAwesomeIcon icon={faChevronDown} className="w-4"/>
                            </p>
                        </li>
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
        icon: faUsers
    },
    {
        name: "Productos",
        icon: faCartShopping
    },
    {
        name: "Vendas",
        icon: faMoneyBill
    },
    {
        name: "Fornecedores",
        icon: faTruckFast
    },
    {
        name: "Armázens",
        icon: faWarehouse
    }
]