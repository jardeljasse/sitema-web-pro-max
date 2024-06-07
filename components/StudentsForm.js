"use client"

export default function StudentsForm({ onSubmit, isLoading }) {
    return (
        <form className='max-w-[635px] ' onSubmit={onSubmit} >
            <div>
                <h3 className='text-xl font-light py-1'>Dados Pessoais</h3>
                <div className="grid-group flex gap-4">
                    <div>
                        <p className='py-1'><label htmlFor="name">Nome Completo</label></p>
                        <input type="text" name="name" id="name"
                            required
                        />
                    </div>
                    <div>
                        <p className='py-1'><label htmlFor="birth-day">Data de Nascimento</label></p>
                        <input type="date" name="birthDay" id="birth-day"
                            required
                            className='block w-[200px]'
                        />
                    </div>
                    <div>
                        <p className='py-1'><label htmlFor="nacionality">Nacionalidade</label></p>
                        <input type="text" name="nacionality" id="nacionality"
                            required
                        />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div>
                        <p className='py-1'><label htmlFor="born-place">Local de Nascimento</label></p>
                        <input type="text" name="bornPlace" id="born-place"
                            required
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
                                /*defaultChecked={user?.gender === "M"}*/
                                />
                            </label>
                            <label htmlFor="male" className="mx-4">
                                F{" "}
                                <input type="radio"
                                    name="gender"
                                    value="F"
                                    id="male"
                                    required
                                /*defaultChecked={user?.gender === "F"}*/
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
                        />
                    </div>
                    <div>
                        <p className='py-1'><label htmlFor="neighbornhood">Bairro</label></p>
                        <input type="text" name="neighbornhood" id="neighbornhood"
                            required
                        />
                    </div>
                    <div>
                        <p className='py-1'><label htmlFor="sponsor-contact">Conctato do Encarregado</label></p>
                        <input type="number" name="sponsorContact" id="sponsor-contact"
                            required
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
                Cadastrar Aluno
                {/* {user? "Salvar alterações" : "Criar Usuário"} */}
            </button>
        </form>
    )
}
