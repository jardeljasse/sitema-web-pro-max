//import React from "react";
import LoginForm from "@/components/LoginForm";
import Image from "next/image";

export default function page() {
  return (
    // <main className="h-[100vh] flex justify-center items-center">
    //   <section className="bg-skin-cl700 h-[400px] flex items-center justify-center gap-10 md:flex-col sm:flex-col w-[800px] m-0 mx-auto rounded-lg  p-2 ">
    //     <Image
    //       className="block bg-skin-cl100 h-full basis-[70%]  w-[450px] rounded-md"
    //       src="/images/sen-logo-white.png"
    //       width={250}
    //       height={250}
    //       alt="Sen logo"
    //     />

    //     <LoginForm />
    //   </section>
    // </main>
    <main className="h-screen flex justify-center items-center">
      <section className="bg-skin-cl700 h-auto max-h-[80vh] flex flex-col md:flex-row md:max-h-[70vh] md:h-auto items-center justify-center gap-10 w-full max-w-[800px] mx-4 md:mx-auto rounded-lg p-4 sm:p-2">
        <Image
          className="block bg-skin-cl100 h-[40vh] w-full md:h-full md:w-[full] rounded-md object-cover"
          src="/images/sen-logo-white.png"
          width={250}
          height={250}
          alt="Sen logo"
        />
        <LoginForm />
      </section>
    </main>
  );
}
