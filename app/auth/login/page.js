//import React from "react";
import LoginForm from "@/components/LoginForm"
import Image from "next/image"

export default function page(){
    return(
        <main className="h-[100vh] pt-[20vh]">
            <section className="bg-skin-cl700 h-[400px] w-[800px] m-0 mx-auto rounded-lg  p-2 flex items-center justify-center gap-10">
                <Image className="block bg-skin-cl100 h-full basis-[70%]  w-[450px] rounded-md" src="/images/sen-logo-white.png"  width={250} height={250} alt="Sen logo"/>

                <LoginForm />
            </section>
        </main>
    )
}