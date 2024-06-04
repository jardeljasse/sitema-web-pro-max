import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Navbar />
      <div className="showcase-library bg-skin-cl500 h-[60vh]">
        <div className="container flex items-center justify-center h-[60vh]">
          <h1 className="text-6xl font-bold text-white">
            BIBLIOTECA{" "}
            <span className="span-color text-gray font-light">VIRTUAL</span>
          </h1>
        </div>
      </div>

      <main>
        <div className="container">
          <h2 className="text-3xl">Livros</h2>
          <hr className="w-[100px] h-8 text-skin-cl900" />
          <div className="books-items flex flex-wrap">
            <div className="book-item text-white ">
              <Image
                src="/images/subjects/biologia.webp"
                width={310}
                height={200}
                className="cursor-pointer"
              />
              <h3 className="p-2 text-black font-bold text-2xl">
                HISTORIA 9ª classe
              </h3>
              <Link 
              href={"./aaa.pdf"}
              target="_blank">
                <span
                  className="bg-skin-cl100 p-1 text-white text-[13px]"
                  
                >
                  Descarregar
                </span>
              </Link>

              <Link href={"books/historia-9.zip"}>
                <span className="bg-skin-cl100 p-1 text-white text-[13px]">
                  Ler
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[200px]"></div>
      </main>
    </>
  );
}
