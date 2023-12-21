"use cliente"

export default function ProductionForm({isLoading, onSubmit}){
    return (
        <form className="max-w-md" onSubmit={onSubmit}>
        <div className="flex gap-4">
            <div className="form-group">
                <label htmlFor="truckId">TruckRegNo</label>
                <select name="truckId" id="truckId" className="w-full cursor-pointer"
                required>
                    <option value="074">074</option>          
                    <option value="080">080</option>          
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="driver">Operador</label>
                <select name="driver" id="driver" className="w-full cursor-pointer"
                required>
                    <option value="Armindo Mateus">Armindo Ndava</option>          
                    <option value="Fabio Mateus">Fabio Mateus</option>          
                </select>
            </div>
        </div>

        <div className="flex gap-4">
            <div className="form-group">
                <label htmlFor="mass1">Massa_1</label>
                <input type="number" name="mass1" id="mass1" required/>
            </div>   
            <div className="form-group">
                <label htmlFor="mass2">Massa_2</label>
                <input type="number" name="mass2" id="mass2" required/>
            </div>    
            
        </div> 

        <div className="flex gap-4">
            <div className="form-group">
                <label className="text-center"htmlFor="netMass">NetMass</label>
                <input type="number" name="netMass" id="netMass" required />
            </div>
        </div> 
        <div className="flex gap-4">
            <div className="form-group">
                <label htmlFor="dateIn">Data de Entrada</label>
                <input type="date" name="dateIn" id="dateIn" required />
            </div>
            <div className="form-group">
                <label htmlFor="dateOut">Data de Saída</label>
                <input type="date" name="dateOut" id="dateOut" required />
            </div>
            

        </div> 
            <div className="form-group">
                <label htmlFor="description">Comentário</label>
                <textarea name="description" id="description"
                rows="3"
                className="w-full" placeholder="Pode deixar o seu comentário de uma forma breve Aqui!"></textarea>
            </div>

        <button 
            disabled={isLoading}
            className="bg-sky-500
            hover:bg-sky-600 transition-all p-2
            text-white disabled:bg-zinc-500 
            w-full"> Registrar Produção                 
        </button>  
    </form>
    );
}