import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

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

      <main className="mb-[200px]">
        <div className="container">
          <h2 className="text-3xl">Livros</h2>
          <hr className="w-[100px] h-8 text-skin-cl900" />
          <div className="books-items flex flex-wrap gap-8">
            <div className="book-item text-white ">
              <Image
                src="/images/subjects/biologia.webp"
                width={170}
                height={200}
                className="cursor-pointer"
              />
              <h3 className="p-2 text-black font-bold text-2xl">
                BIOLOGIA 9ª classe
              </h3>
              <Link
                href={"https://drive.google.com/file/d/1IAY5JKpcV95PF7Pq5c34WUkkxK1PpBjY/view?usp=drive_link"}
                target="_blank">
                <span
                  className="bg-skin-cl100 p-1 text-white text-[13px]"

                >
                  Descarregar <FontAwesomeIcon icon={faDownload} />
                </span>
              </Link>
            </div>
            <div className="book-item text-white ">
              <Image
                src="/images/subjects/portugues.webp"
                width={170}
                height={200}
                className="cursor-pointer"
              />
              <h3 className="p-2 text-black font-bold uppercase text-2xl">
                PORTUGUêS 9ª classe
              </h3>
              <Link
                href={"https://drive.google.com/file/d/1IAY5JKpcV95PF7Pq5c34WUkkxK1PpBjY/view?usp=drive_link"}
                target="_blank">
                <span
                  className="bg-skin-cl100 p-1 text-white text-[13px]"

                >
                  Descarregar <FontAwesomeIcon icon={faDownload} />
                </span>
              </Link>
            </div>
            <div className="book-item text-white ">
              <Image
                src="/images/subjects/frances.webp"
                width={170}
                height={200}
                className="cursor-pointer"
              />
              <h3 className="p-2 text-black font-bold text-2xl uppercase">
                Francês 9ª classe
              </h3>
              <Link
                href={"https://drive.google.com/file/d/1IAY5JKpcV95PF7Pq5c34WUkkxK1PpBjY/view?usp=drive_link"}
                target="_blank">
                <span
                  className="bg-skin-cl100 p-1 text-white text-[13px]"

                >
                  Descarregar <FontAwesomeIcon icon={faDownload} />
                </span>
              </Link>
            </div>
            <div className="book-item text-white ">
              <Image
                src="/images/subjects/maths.webp"
                width={170}
                height={200}
                className="cursor-pointer"
              />
              <h3 className="p-2 text-black font-bold text-2xl uppercase">
                matemática 9ª classe
              </h3>
              <Link
                href={"https://drive.google.com/file/d/1IAY5JKpcV95PF7Pq5c34WUkkxK1PpBjY/view?usp=drive_link"}
                target="_blank">
                <span
                  className="bg-skin-cl100 p-1 text-white text-[13px]"

                >
                  Descarregar <FontAwesomeIcon icon={faDownload} />
                </span>
              </Link>
            </div>
            <div className="book-item text-white ">
              <Image
                src="/images/subjects/Geografia.webp"
                width={170}
                height={200}
                className="cursor-pointer"
              />
              <h3 className="p-2 text-black font-bold text-2xl">
                GEOGRAFIA 9ª classe
              </h3>
              <Link
                href={"https://drive.google.com/file/d/1IAY5JKpcV95PF7Pq5c34WUkkxK1PpBjY/view?usp=drive_link"}
                target="_blank">
                <span
                  className="bg-skin-cl100 p-1 text-white text-[13px]"

                >
                  Descarregar <FontAwesomeIcon icon={faDownload} />
                </span>
              </Link>
            </div>
            <div className="book-item text-white ">
              <Image
                src="/images/subjects/biologia.webp"
                width={170}
                height={200}
                className="cursor-pointer"
              />
              <h3 className="p-2 text-black font-bold text-2xl">
                HISTORIA 9ª classe
              </h3>
              <Link
                href={"https://drive.google.com/file/d/1IAY5JKpcV95PF7Pq5c34WUkkxK1PpBjY/view?usp=drive_link"}
                target="_blank">
                <span
                  className="bg-skin-cl100 p-1 text-white text-[13px]"

                >
                  Descarregar <FontAwesomeIcon icon={faDownload} />
                </span>
              </Link>
            </div>
          </div>

        </div>
        <div className="container  ">
          <h2 className="text-3xl mt-[20px] ">Videos</h2>
          <hr className="w-[100px] h-8 text-skin-cl900" />
          <div className="video-items flex flex-wrap gap-5">
            
            <div className="video-item">
              <iframe  src="https://www.youtube.com/embed/Ayg_UzRtAkw?si=AfMCgyrspIJ6uDc9&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div className="video-items ">
            <div className="video-item">
            <iframe  src="https://www.youtube-nocookie.com/embed/GFuxGFxz7Cc?si=eozb9NoU2CG4bdHV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
          </div>
         
        </div>
      </main>
    </>
  );
}
