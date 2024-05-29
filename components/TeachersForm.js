import React from 'react'

export default function TeachersForm({ isLoading, onSubmit }) {
    return (
        <form action="" className='max-w-[635px]' onSubmit={onSubmit} >
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
                        <p className='py-1'><label htmlFor="bornPlace">Província</label></p>
                        <input type="text" name="province" id="born-place"
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
                <h3 className='text-xl font-light py-1'>Formação</h3>
                <div className="flex-group flex gap-4">
                    <div>
                        <p className='py-1'><label htmlFor="formation">Área de Formação</label></p>
                        <input type="text" name="formation" id="formation"
                            required
                        />
                    </div>
                    <div>
                        <p className='py-1'><label htmlFor="subject">Disciplina</label></p>
                        <select name="subject" id="subject" className='w-[200px]'>
                            <option value="Português">Português</option>
                            <option value="Matemática">Matemática</option>
                            <option value="Inglês">Inglês</option>
                            <option value="História">História</option>
                            <option value="Biologia">Biologia</option>
                            <option value="Física">Física</option>
                            <option value="Química">Química</option>
                            <option value="Ed.Visual">Ed.Visual</option>
                        </select>
                    </div>
                    <div>
                        <p className='py-1'><label htmlFor="number">Conctato</label></p>
                        <input type="number" name="number" id="number"
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
