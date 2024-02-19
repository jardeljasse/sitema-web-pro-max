"use client"

export default function ProductionForm({isLoading, onSubmit, production}){

   
    return (
        <form className="max-w-md" onSubmit={onSubmit}>
        <div className="flex gap-4">
            <div className="form-group">
                <label htmlFor="truckId">TruckRegNo</label>
                <select 
                name="truckId" 
                id="truckId" 
                className="w-full cursor-pointer"
                required 
                defaultValue={production?.truckId}
                >
                    <option value="101">101</option>          
                    <option value="102">102</option>          
                    <option value="065">065</option>          
                    <option value="065">065</option>          
                    <option value="066">066</option>          
                    <option value="067">067</option>          
                    <option value="068">068</option>          
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="driver">Operador</label>
                <select 
                name="driver" 
                id="driver" 
                className="w-full cursor-pointer"
                required
                defaultValue={production?.driver}
                >
                    <option value="Wili">Wili</option>          
                    <option value="Benildo">Benildo</option>
                    <option value="Francisco">Francisco</option>
                    <option value="Evidêncio">Evidêncio</option>
                    <option value="Chaquil">Chaquil</option>
                    <option value="Amade">Amade</option>          
                </select>
            </div>
        </div>

        <div className="flex gap-4">
            <div className="form-group">
                <label htmlFor="mass1">Massa_1</label>
                <input 
                type="number" 
                name="mass1" 
                d="mass1" 
                required 
                defaultValue={production?.mass1}
                />
            </div>   
            <div className="form-group">
                <label htmlFor="mass2">Massa_2</label>
                <input 
                type="number" 
                name="mass2" 
                id="mass2" 
                required 
                defaultValue={production?.mass2}
                />
            </div>    
            
        </div> 

        <div className="flex gap-4">
            {/* <div className="form-group">
                <label className="text-center"htmlFor="netMass">NetMass</label>
                <input type="number" name="netMass" id="netMass"  />
            </div> */}
        </div> 
        <div className="flex gap-4">
            <div className="form-group">
                <label htmlFor="dateIn">Data de Entrada</label>
                <input 
                type="date" 
                name="dateIn" 
                id="dateIn" 
                required defaultValue={production?.dateIn.split("T")[0]}/>
            </div>
            <div className="form-group">
                <label htmlFor="dateOut">Data de Saída</label>
                <input 
                type="date" 
                name="dateOut" 
                id="dateOut" 
                equired 
                defaultValue={production?.dateOut.split("T")[0]}
                />
            </div>
            

        </div> 
            <div className="form-group">
                <label htmlFor="description">Comentário</label>
                <textarea name="description" id="description"
                rows="3"
                className="w-full" 
                placeholder="Pode deixar o seu comentário de uma forma breve Aqui!"
                defaultValue={production?.description}></textarea>
            </div>

        <button 
            disabled={isLoading}
            className="bg-sky-500
            hover:bg-sky-600 transition-all p-2
            text-white disabled:bg-zinc-500 
            w-full"> 
            {production ? "Salvar Alterações" : "Registrar Produção"}             
        </button>  
    </form>
    );
}