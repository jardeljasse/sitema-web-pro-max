"use client";

import LessonsTable from "@/components/LessonsTable";
import PageHeader from "@/components/PageHeader";
import React, { useState } from "react";

export default function page() {
  const [subject, setSubject] = useState();

  return (
    <>
      <PageHeader title="Lista das Aulas">
        <p>Aqui podes visualizar a lista das aulas no sistema</p>
      </PageHeader>

      <section>
        {/* <TeachersTable /> */}
        {/* <div className="mb-[10rem] max-w-md">
          <form action="">
            <p>
              <label htmlFor="trimester">Selecione o Trimestre</label>
            </p>
            <select
              onChange={(e) => setSubject(e.target.value)}
              name="subject"
              id="subject"
              className="w-full"
            >
              <option value="Português">Português</option>
              <option value="Matemática">Matemática</option>
              <option value="Inglês">Inglês</option>
              <option value="História">História</option>
              <option value="Biologia">Biologia</option>
              <option value="Física">Física</option>
              <option value="Química">Química</option>
              <option value="Ed.Visual">Ed.Visual</option>
            </select>
          </form>
        </div> */}
        <LessonsTable />
      </section>
    </>
  );
}
