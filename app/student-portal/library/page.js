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
          <h1 className="text-white
          text-4xl sm:text-5xl text-center md:text-6xl lg:text-7xl font-bold p-2 text-skin-cl500">
            BIBLIOTECA{" "}
            <span className="span-color text-gray font-light">VIRTUAL</span>

          </h1>
        </div>
      </div>

      <main className="mb-[200px]">
        <div className="container">
          <h2 className="text-3xl my-2">Livros</h2>
          <p className="mb-2">
            Acesse os livros abaixo listados. Podendo clicar nos botões descarregar.
          </p>
          {/* <hr className="w-[100px] h-8 text-skin-cl900" /> */}
          {/* <div className="books-items flex flex-wrap gap-8"> */}
          <div className="books-items gap-8">
            <div className="book-item  flex-col items-center justify-center text-white ">
              <Image
                src="/images/subjects/fraces.png"
                width={170}
                height={200}
                className="cursor-pointer block m-auto"
              />
              <h3 className="p-2 text-black font-bold text-2xl uppercase">
                FRANCêS
              </h3>
              <div className="p-2">
                <Link
                  href={"https://drive.google.com/file/d/1IAY5JKpcV95PF7Pq5c34WUkkxK1PpBjY/view?usp=drive_link"}
                  target="_blank">
                  <span className="bg-skin-cl100 p-1 text-white text-[13px]">
                    Descarregar <FontAwesomeIcon icon={faDownload} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="book-item flex flex-col text-white ">
              <Image
                src="/images/subjects/gografia.png"
                width={170}
                height={200}
                className="cursor-pointer block m-auto"
              />
              <h3 className="p-2 text-black font-bold text-2xl uppercase">
                GEOGRAFIA
              </h3>
              <div className="p-2">
                <Link
                  href={"https://drive.google.com/file/d/1IAY5JKpcV95PF7Pq5c34WUkkxK1PpBjY/view?usp=drive_link"}
                  target="_blank">
                  <span className="bg-skin-cl100 p-1 text-white text-[13px]">
                    Descarregar <FontAwesomeIcon icon={faDownload} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="book-item flex flex-col text-white ">
              <Image
                src="/images/subjects/historia.png"
                width={170}
                height={200}
                className="cursor-pointer block m-auto"
              />
              <h3 className="p-2 text-black font-bold text-2xl uppercase">
                HISTORIA
              </h3>
              <div className="p-2">
                <Link
                  href={"https://drive.google.com/file/d/1IAY5JKpcV95PF7Pq5c34WUkkxK1PpBjY/view?usp=drive_link"}
                  target="_blank">
                  <span className="bg-skin-cl100 p-1 text-white text-[13px]">
                    Descarregar <FontAwesomeIcon icon={faDownload} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="book-item flex flex-col text-white ">
              <Image
                src="/images/subjects/igles.png"
                width={170}
                height={200}
                className="cursor-pointer block m-auto"
              />
              <h3 className="p-2 text-black font-bold text-2xl uppercase">
                Inglês
              </h3>
              <div className="p-2">
                <Link
                  href={"https://drive.google.com/file/d/1IAY5JKpcV95PF7Pq5c34WUkkxK1PpBjY/view?usp=drive_link"}
                  target="_blank">
                  <span className="bg-skin-cl100 p-1 text-white text-[13px]">
                    Descarregar <FontAwesomeIcon icon={faDownload} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="book-item flex flex-col text-white ">

              <Image
                src="/images/subjects/iologia.png"
                width={170}
                height={200}
                className="cursor-pointer block m-auto"
              />
              <h3 className="p-2 text-black font-bold text-2xl uppercase">
                BIOLOGIA
              </h3>
              <div className="p-2">
                <Link
                  href={"https://drive.google.com/file/d/1IAY5JKpcV95PF7Pq5c34WUkkxK1PpBjY/view?usp=drive_link"}
                  target="_blank">
                  <span className="bg-skin-cl100 p-1 text-white text-[13px]">
                    Descarregar <FontAwesomeIcon icon={faDownload} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="book-item flex flex-col text-white ">
              <Image
                src="/images/subjects/maths.png"
                width={170}
                height={200}
                className="cursor-pointer block m-auto"
              />
              <h3 className="p-2 text-black font-bold text-2xl uppercase">
                matemática
              </h3>
              <div className="p-2">
                <Link
                  href={"https://drive.google.com/file/d/1IAY5JKpcV95PF7Pq5c34WUkkxK1PpBjY/view?usp=drive_link"}
                  target="_blank">
                  <span className="bg-skin-cl100 p-1 text-white text-[13px]">
                    Descarregar <FontAwesomeIcon icon={faDownload} />
                  </span>
                </Link>
              </div>
            </div>
            <div className="book-item flex flex-col text-white ">
              <Image
                src="/images/subjects/portugues.png"
                width={170}
                height={200}
                className="cursor-pointer block m-auto"
              />
              <h3 className="p-2 text-black font-bold text-2xl uppercase">
                Português
              </h3>
              <div className="p-2">
                <Link
                  href={"https://drive.google.com/file/d/1IAY5JKpcV95PF7Pq5c34WUkkxK1PpBjY/view?usp=drive_link"}
                  target="_blank">
                  <span className="bg-skin-cl100 p-1 text-white text-[13px]">
                    Descarregar <FontAwesomeIcon icon={faDownload} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container  ">
          <h2 className="text-3xl mt-[20px] ">Videos</h2>          
          <p className="mb-2">
            Acesse os vídeos abaixo listados. Quando for acessar o vídeo, terá a opção de escolher se pretende ser  direcionado a plataforma do YouTube.
          </p>
          <div className="video-items">

            <div className="video-item relative">
            <iframe src="https://www.youtube.com/embed/Ayg_UzRtAkw?si=bImlD8Gg1KCoxVDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>


            <div className="video-item relative">
              <iframe src="https://www.youtube-nocookie.com/embed/GFuxGFxz7Cc?si=eozb9NoU2CG4bdHV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
              </iframe>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
