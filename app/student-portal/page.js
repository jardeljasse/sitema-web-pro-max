'use client'

import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import PageHeaderPortal from "@/components/PageHeaderPortal";
import VlibrasPlugin from "@/components/VlibrasPlugin";
import Image from "next/image";
// import dynamic from "next/dynamic"+
import Link from "next/link";
import Subjects from "@/components/Subjects";
import HeaderPortal from "@/components/HeaderPortal";

// const VlibrasPlugin = dynamic(() => import('../../components/VlibrasPlugin'),
//   { ssr: false })

export default function page() {
  return (
    <>
      <Navbar />

      <HeaderPortal />

      <main className="bg-gray-900 text-white p-10">
        <div className="container">
            <VlibrasPlugin />

          <PageHeaderPortal title="DISCIPLINAS">
            Selecione a disciplina que pretende estudar
          </PageHeaderPortal>

         <Subjects />
        </div>
      </main>

    </>
  );
}
