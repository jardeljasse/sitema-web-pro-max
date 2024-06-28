"use client";

import { useSession } from "next-auth/react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";


export default function layout({ children }) {
  const {data: session, status} = useSession();
  const router = useRouter();

  
  if(status === "loading"){
    return(
      <body className='flex flex-col items-center
      h-[100vh] justify-center'>
        <FontAwesomeIcon 
        icon={faCircleNotch} 
        className='w-8 h-8 animate-spin text-center text-skin-cl700 '/>
        {/* <p>Verificando a sua <strong>Autenticação</strong></p> */}
        <p className='text-skin-cl700 text-3xl text-center max-sm:text-xl'>Verificando a sua <strong>Autenticação</strong></p>
      </body>
    );
  } else if(status === "authenticated"){    
    return ( 
        <body>
          <div className='relative'>
            {/* <Sidebar /> */}
          </div>
          
          <div>
            {/* <Navbar /> */}
            <main>{children}</main>
          </div>
        </body>
    );
  } else {
    return router.push("/auth/login")
  }

}

