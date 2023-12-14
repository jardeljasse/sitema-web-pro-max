"use client"

import Link from "next/link";
import {signIn} from "next-auth/react";
import React, {useRef, useState} from "react";
import { useRouter } from "next/navigation";

export default function LoginForm(){

    //IMPORTED ON C:\Users\FADE\Documents\ESTUDOS\aquecimento\sitema-web-pro-max\app\auth\login\page.js
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const router = useRouter()

    //para mudanca do botao ao carregar
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault() //prevenir o reload da página

        setIsLoading(true)
        setMessage("");

        signIn("credentials", {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            redirect: false, //nao ser redericionado a uma outra page
            
        }).then((res) =>{            
            setIsLoading(false)

            //palavra passe incorrecta
            if(res.status === 401){ 
               return setMessage("Email ou Palavra-passe Errada!")
            }else if(res.error){
                return setMessage("Ocorreu um erro no Servidor, tente novamente")
            }            

            router.push("/") 
        }).catch((err) => alert(err))
    }
    return (
    <form onSubmit={handleSubmit} className="mt-8 w-full">
        <label htmlFor="email" className="block text-green-700">
            Email
        </label>
        <input
        ref={emailRef} 
        type="email" 
        name="email" id="email" 
        className="w-full p-2 " />
        <label htmlFor="email" className="block text-green-700 mt-4">
            Password
        </label>
        <input 
        ref={passwordRef}
        type="password" 
        name="password" 
        id="password" 
        className="w-full p-2" />
        <button 
        disabled={isLoading}
        className="bg-green-900
            hover:bg-sky-600 transition-all p-2
            text-white disabled:bg-green-300 
            w-full mt-6">Entrar
            
            </button>  
            {
                message && <p className="text-red-800 text-center mt-4 ">
                    {message}
                </p>
            }

        <Link href="/auth/forget-password" className="text-center mt-4 block text-green-600 hover:underline">Esqueceu a palavra passe?</Link>
    </form>
    
    );
}