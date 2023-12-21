import PageHeader from "@/components/PageHeader";


export default function page(){
    return(
        <>
            <PageHeader title="Frota de Camiões">
            <p>Aqui voçê pode cadastrar qualquer tipo de Frota de camião!</p>
            </PageHeader>

            <section className="mt-8">
                <form className="max-w-md">
                    <div className="flex gap-4">
                        <div className="form-group">
                            <label htmlFor="truckId">
                            Id do Camião</label>
                            <input type="number" name="truckId" id="truckId" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registration">Matrícula</label>
                            <input type="text" name="registration" id="registration" 
                            required />
                        </div>
                    </div>

                    <div className="flex gap-4">
                      
                        <div className="form-group">
                            <label htmlFor="truckType">Tipo de Camião</label>
                            <select name="truckType" id="truckType" className="w-full cursor-pointer"> 
                                <option value="tipperTruck">Camião Basculante</option>
                                <option value="linkTruck">Camião Link</option>                                
                            </select>
                        </div>   
                        <div 
                            className="form-group">
                            <label htmlFor="provider">Fornecedor</label>
                            <select name="provider" id="provider" className="w-full cursor-pointer"> 
                                <option value="DL">DL</option>           
                            </select>
                        </div>    
                        
                    </div> 

                    {/* <div className="flex gap-4">
                        <div className="form-group">
                            <label htmlFor="weightTruck">Peso (kg)</label>
                            <input type="number" name="weightTruck" id="weightTruck" required />
                        </div>                    
                    </div>  */}

                    <button 
                        className="bg-sky-500
                        hover:bg-sky-600 transition-all p-2
                        text-white disabled:bg-zinc-500 
                        w-full">
                        Registrar Frota     
                    </button>  
                </form>
            </section>
        </>
    )
}