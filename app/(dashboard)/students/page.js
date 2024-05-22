import PageHeader from "@/components/PageHeader";
import StudentsTable from "@/components/StudentsTable";

export default function page(){
    return(
        <>
        <PageHeader title="Listar Alunos">
        <p>Aqui voçê pode listar e visulizar os alunos registados no sistema</p>
        </PageHeader>

        <section>
            <StudentsTable />
        </section>
        </>
    )
}