//import React from "react";
import LoginForm from "@/components/LoginForm"
import Image from "next/image"

export default function page(){
    return(
        <main className="h-[100vh] pt-[10vh]">
            <section className="bg-green-100 max-w-sm mx-auto  p-2 flex items-center flex-col">
                <Image src="/images/gre.jpg"  width={250} height={250} alt="Green Capital Logistic Image"/>

                <LoginForm />
            </section>
        </main>
    )
}