import PageHeader from "@/components/PageHeader";
import StudentsForm from "@/components/StudentsForm";

export default function page() {
    return (
        <>
            <PageHeader title="Cadastrar aluno">
            <p>Aqui voçê pode cadastrar um novo aluno para o sistema</p>
            </PageHeader>
            <section className="mt-8 w-full">
                <StudentsForm />
            </section>
        </>
    )
}