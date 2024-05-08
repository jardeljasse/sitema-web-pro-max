import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import PageHeaderPortal from "@/components/PageHeaderPortal";
import VlibrasPlugin from "@/components/VlibrasPlugin";
import Image from "next/image";

export default function page() {
  return (
    <>
      <Navbar />

      <header className="h-[70vh] bg-skin-cl900 ">
        <div className="container flex h-[70vh] justify-between items-center px-10">
          <div className="image-header">
            <Image src={"/images/sen-logo.png"} width={300} height={300} />
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

      <main>
        <div className="container">
          <PageHeaderPortal title="DISCIPLINAS">
            {/* <p>Selecione a disciplina que pretende estudar</p> */}
          </PageHeaderPortal>
        </div>
      </main>

      <VlibrasPlugin />
    </>
  );
}
