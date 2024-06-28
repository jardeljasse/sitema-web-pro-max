'use client'

import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import PageHeaderPortal from "@/components/PageHeaderPortal";
import Image from "next/image";
// import dynamic from "next/dynamic";
import Subjects from "@/components/Subjects";
import HeaderPortal from "@/components/HeaderPortal";
import VlibrasPlugin from "@/components/VlibrasPlugin";
// import VLibras from "react-vlibras";

// const VlibrasPlugin = dynamic(() => import('../../components/VlibrasPlugin'),
//   { ssr: true })

export default function page() {
  return (
    <>
      <Navbar />

      <HeaderPortal />

      <main className="bg-gray-900 text-white">
          {/* <VLibras forceOnload={true} />   */}
          <VlibrasPlugin />
          {/* <VLibras safeInit /> */}
        <div className="container">

          <PageHeaderPortal title="DISCIPLINAS">
            Selecione a disciplina que pretende estudar
          </PageHeaderPortal>

         <Subjects />
        </div>
      </main>

    </>
  );
}
