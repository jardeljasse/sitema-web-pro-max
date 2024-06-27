"use client";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  //IMPORTED ON C:\Users\FADE\Documents\ESTUDOS\aquecimento\sitema-web-pro-max\app\auth\login\page.js

  const emailRef = useRef();
  const passwordRef = useRef();
  const roleRef = useRef();
  const router = useRouter();

  //para mudanca do botao ao carregar
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { data: session } = useSession();

  const handleSubmit = (e) => {
    e.preventDefault(); //prevenir o reload da página

    setIsLoading(true);
    setMessage("");

    signIn("credentials", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      role: roleRef,
      redirect: false, //nao ser redericionado a uma outra page
    })
      .then((res) => {
        setIsLoading(false);
        //palavra passe incorrecta
        if (res.status === 401) {
          return setMessage("Email ou Palavra-passe Incorrecta!");
        } else if (res.error) {
          return setMessage("Ocorreu um erro no Servidor, tente novamente");
        } else if (session?.user.role === "admin" || session?.user.role === "teacher") {
          return router.push("/")
          alert("é um: " + session?.user.role);
        } else if (session.user.role === "student") {
          alert("é um: " + session.user.role);
          router.push("/student-portal")
          console.log(session?.user.role)
        } else {
          alert("Não pode acesseder a plataforma, a funcao actual é: " +session?.user.role);
        }
      })
      .catch((err) => alert(err));
  };
  return (
    <form onSubmit={handleSubmit} className="pr-8 w-full">
      <label htmlFor="email" className="block text-white">
        Email
      </label>
      <input
        ref={emailRef}
        type="email"
        name="email"
        id="email"
        className="w-full p-2 "
      />
      <label htmlFor="email" className="block text-white mt-4">
        Password
      </label>
      <input
        ref={passwordRef}
        type="password"
        name="password"
        id="password"
        className="w-full p-2"
      />
      <button
        disabled={isLoading}
        className="bg-skin-cl100
            hover:bg-skin-cl900 transition-all p-2
            text-white disabled:bg-zinc-500 
            w-full mt-6"
      >
        Entrar
      </button>
      {message && <p className="text-red-400 text-center mt-4 ">{message}</p>}

      <Link
        href="/auth/forget-password"
        className="text-center mt-4 block text-white hover:underline"
      >
        Esqueceu a palavra passe?
      </Link>
    </form>
  );
}
