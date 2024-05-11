'use client'

import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import PageHeaderPortal from "@/components/PageHeaderPortal";
// import VlibrasPlugin from "@/components/VlibrasPlugin";
import Image from "next/image";
import dynamic from "next/dynamic"
import Link from "next/link";

const VlibrasPlugin = dynamic(() => import('../../components/VlibrasPlugin'),
{ssr: false})

export default function page() {
  return (
    <>
      <Navbar />

      <header className="h-[100vh] bg-skin-cl900 ">
        <div className="container flex h-[80vh] justify-between items-center px-10">
          <div className="image-header">
            <Image src={"/images/sen-logo-wht.png"} width={400} height={400} />
          </div>
          <div className="progress-bar">
            <h1 className="text-white text-xl text-center pb-4 font-bold">
              SEU PROGRESSO
            </h1>
            <div className="progress-bar-item flex items-center justify-center">
              <p className="text-white text-5xl text- pb-4 font-bold">60%</p>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-gray-900 text-white p-10">
        <div className="container">
          
          <VlibrasPlugin />

          <PageHeaderPortal title="DISCIPLINAS">
            Selecione a disciplina que pretende estudar
          </PageHeaderPortal>

          <section className="mt-10 subjects">
            <div className="subject-cont">
              <div className="subject bg-skin-cl500 h-[480p] max-w-[380px] rounded-[10px]">
                <div className="bg-skin-cl900 image-subject
                ">
                  <Image className="block m-auto" 
                  src="/images/subjects/historia-9.png"
                  width={300}
                  height={300}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl">Historia - 9ª classe</h2>
                  <p className="my-[1rem]">
                    Conheça a história de Moçambique, toda a sua evolução até o dia actual.
                    Conheça a história de Moçambique, toda a sua evolução até o dia actual.
                    Conheça a história de Moçambique, toda a sua evolução até o dia actual.
                  </p>
                  <Link className="bg-gray-900 py-2 px-8 rounded-xl text-center block" href="/">Entrar e estudar</Link>
                </div>
              </div>
              <div className="subject bg-skin-cl500 h-[480p] max-w-[380px] rounded-[10px]">
                <div className="bg-skin-cl900 image-subject
                ">
                  <Image className="block m-auto" src="/images/subjects/historia-9.png"
                  width={300}
                  height={300}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl">Historia - 9ª classe</h2>
                  <p className="my-[1rem]">
                    Conheça a história de Moçambique, toda a sua evolução até o dia actual.
                    Conheça a história de Moçambique, toda a sua evolução até o dia actual.
                    Conheça a história de Moçambique, toda a sua evolução até o dia actual.
                  </p>
                  <Link className="bg-gray-900 py-2 px-8 rounded-xl text-center block" href="/">Entrar e estudar</Link>
                </div>
              </div>
              <div className="subject bg-skin-cl500 h-[480p] max-w-[380px] rounded-[10px]">
                <div className="bg-skin-cl900 image-subject
                ">
                  <Image className="block m-auto" src="/images/subjects/historia-9.png"
                  width={300}
                  height={300}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl">Historia - 9ª classe</h2>
                  <p className="my-[1rem]">
                    Conheça a história de Moçambique, toda a sua evolução até o dia actual.
                    Conheça a história de Moçambique, toda a sua evolução até o dia actual.
                    Conheça a história de Moçambique, toda a sua evolução até o dia actual.
                  </p>
                  <Link className="bg-gray-900 py-2 px-8 rounded-xl text-center block" href="/">Entrar e estudar</Link>
                </div>
              </div>
              <div className="subject bg-skin-cl500 h-[480p] max-w-[380px] rounded-[10px]">
                <div className="bg-skin-cl900
                ">
                  <Image className="block m-auto" src="/images/subjects/historia-9.png"
                  width={300}
                  height={300}
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-2xl">Historia - 9ª classe</h2>
                  <p className="my-[1rem]">
                    Conheça a história de Moçambique, toda a sua evolução até o dia actual.
                    Conheça a história de Moçambique, toda a sua evolução até o dia actual.
                    Conheça a história de Moçambique, toda a sua evolução até o dia actual.
                  </p>
                  <Link className="bg-gray-900 py-2 px-8 rounded-xl text-center block" href="/">Entrar e estudar</Link>
                </div>
              </div>
            </div>
            </section>            
        </div>
      </main>

    </>
  );
}
