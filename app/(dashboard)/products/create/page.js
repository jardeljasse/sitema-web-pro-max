import PageHeader from "@/components/PageHeader";


export default function page(){
    return(
        <>
            <PageHeader title="Criar um novo Producto">
            <p>Aqui voçê pode criar um novo producto</p>
            </PageHeader>

            <section className="mt-8">
                <form className="max-w-md">
                    <div className="flex gap-4">
                        <div className="form-group">
                            <label htmlFor="iName">Nome</label>
                            <input type="text" name="name" id="iName" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="iBrand">Marca/Fabricante</label>
                            <input type="text" name="brand" id="iBrand" required />
                        </div>
                    </div>

                    <div className="flex gap-4">
                    <div className="form-group">
                            <label htmlFor="iCatergoty">Categoria</label>
                            <select name="catergoty" id="iCatergoty" className="w-full cursor-pointer">
                                <option value="Electrônicos">Electrônicos</option>
                                <option value="Refrigerantes">Refrigerantes</option>
                                <option value="Comidas e Bebidas">Comidas e Bebidas</option>
                                <option value="Gelados">Gelados</option>                                
                            </select>
                        </div>   
                        <div className="form-group">
                            <label htmlFor="iQuantity">Quantidade</label>
                            <input type="number" name="quantity" id="iQuantity" required/>
                        </div>    
                        
                    </div> 

                    <div className="flex gap-4">
                        <div className="form-group">
                            <label htmlFor="iCost">Custo de Unidade(Mzn)</label>
                            <input type="number" name="cost" id="iCost" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="iPrice">Preço de Venda(Mzn)</label>
                            <input type="number" name="price" id="iPrice" required />
                        </div>

                    </div> 
                        <div className="form-group">
                            <label htmlFor="iPrice">Preço de Venda(Mzn)</label>
                            <textarea name="decription" id="iDescription"
                            rows="5"
                            className="w-full">Descrição</textarea>
                        </div>

                    <button 
                        className="bg-sky-500
                        hover:bg-sky-600 transition-all p-2
                        text-white disabled:bg-zinc-500 
                        w-full">
                        Criar Producto     
                    </button>  
                </form>
            </section>
        </>
    )
}