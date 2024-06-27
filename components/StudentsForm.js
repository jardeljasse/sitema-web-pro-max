"use client"

export default function StudentsForm({ onSubmit, isLoading, students }) {
    return (
        <form className='max-w-[635px] ' onSubmit={onSubmit} >
            <div>
                <h3 className='text-xl font-light py-1'>Dados Pessoais</h3>
                <div className="grid-group flex gap-4">
                    <div>
                        <p className='py-1'><label htmlFor="name">Nome Completo</label></p>
                        <input type="text" name="name" id="name"
                            required
                            defaultValue={students?.name}
                        />
                    </div>
                    <div>
                        <p className='py-1'><label htmlFor="birth-day">Data de Nascimento</label></p>
                        <input type="date" name="birthDay" id="birth-day"
                            required
                            className='block w-[200px]'
                            defaultValue={students?.birthDay.split("T")[0]}
                        />
                    </div>
                    <div>
                        <p className='py-1'><label htmlFor="nacionality">Nacionalidade</label></p>
                        <input type="text" name="nacionality" id="nacionality"
                            required
                            defaultValue={students?.nacionality}
                        />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div>
                        <p className='py-1'><label htmlFor="born-place">Local de Nascimento</label></p>
                        <input type="text" name="bornPlace" id="born-place"
                            required
                            defaultValue={students?.bornPlace}
                        />
                    </div>
                    <div>
                        <label htmlFor="" className='mt-2 block'>Gênero</label>
                        <div>
                            <label htmlFor="male">
                                M{" "}
                                <input type="radio"
                                    name="gender"
                                    value="M"
                                    id="male"
                                    required
                                    defaultChecked={students?.gender === "M"}
                                />
                            </label>
                            <label htmlFor="male" className="mx-4">
                                F{" "}
                                <input type="radio"
                                    name="gender"
                                    value="F"
                                    id="male"
                                    required
                                    defaultChecked={students?.gender === "F"}
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <h3 className='text-xl font-light py-1'>Endereço</h3>
                <div className="flex-group flex gap-4">
                    <div>
                        <p className='py-1'><label htmlFor="city">Cidade</label></p>
                        <input type="text" name="city" id="city"
                            required
                            defaultValue={students?.city}
                        />
                    </div>
                    <div>
                        <p className='py-1'><label htmlFor="neighbornhood">Bairro</label></p>
                        <input type="text" name="neighbornhood" id="neighbornhood"
                            required
                            defaultValue={students?.neighbornhood}
                        />
                    </div>
                    <div>
                        <p className='py-1'><label htmlFor="sponsor-contact">Conctato do Encarregado</label></p>
                        <input type="number" name="sponsorContact" id="sponsor-contact"
                            required
                            defaultValue={students?.sponsorContact}
                        />
                    </div>
                </div>
            </div>
            <div className=''>
                <h3 className='text-xl font-light py-1'>Exames Médicos</h3>
                <div className="flex-group flex gap-4">
                    {/* <div>
                        <p className='py-1'><label htmlFor="healthExame">Grau de Surdez</label></p>
                        <input type="number" name="healthExame" id="healthExame"
                            required
                        />
                    </div> */}
                    <div>
                        <p className='py-1'><label htmlFor="desease">Doença Frequente</label></p>
                        <input type="text" name="desease" id="desease"
                            required
                            defaultValue={students?.desease}
                        />
                    </div>
                </div>
            </div>
            <button
                disabled={isLoading}
                className="bg-sky-500
                     hover:bg-sky-600 transition-all p-2
                      text-white disabled:bg-zinc-500 
                      w-full mt-4">
                
                {students ? "Salvar alterações" : "Cadastrar Aluno"}
            </button>
        </form>
    )
}
