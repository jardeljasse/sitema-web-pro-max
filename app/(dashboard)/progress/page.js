"use client";

import PageHeader from "@/components/PageHeader";
import StudentsTable from "@/components/StudentsTable";
import React, { useState } from "react";

export default function page() {

  return (
    <>
      <PageHeader title="Progresso do Aluno">
        <p>Aqui podes visualizar o progresso do Aluno</p>
      </PageHeader>

      <section>
        <StudentsTable showHeadrs={false} />
      </section>
    </>
  );
}
