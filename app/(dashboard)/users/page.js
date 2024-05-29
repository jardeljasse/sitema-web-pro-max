import PageHeader from "@/components/PageHeader"
import UsersTable from "@/components/UsersTable"

export default function page(){
 //criando um 'FRAGMENTO EM REACT <>...</> OU <React.Fragment></React.Fragment>'   
 return (
    <>
    <PageHeader title="Lista de Usuários">
    <p>Aqui voçê pode listar e visulizar os usuários registados no sistema</p>
    </PageHeader>

    <section className="mt-8">
        <UsersTable />
    </section>    
    </>
 )
}