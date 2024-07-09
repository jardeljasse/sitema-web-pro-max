"use client";


export default function TeachersForm({ isLoading, onSubmit, teachers }) {
  return (
    <form action="" className="max-w-[635px]" onSubmit={onSubmit}>
      <div>
        <h3 className="text-xl font-light py-1">Dados Pessoais</h3>
        <div className="grid-group flex gap-4">
          <div>
            <p className="py-1">
              <label htmlFor="name">Nome Completo</label>
            </p>
            <input type="text" name="name" id="name" required defaultValue={teachers?.name} />
          </div>
          <div>
            <p className="py-1">
              <label htmlFor="birth-day">Data de Nascimento</label>
            </p>
            <input
              type="date"
              name="birthDay"
              id="birth-day"
              required
              className="block w-[200px]"
              defaultValue={teachers?.birthDay.split("T")[0]}
            />
          </div>
          <div>
            <p className="py-1">
              <label htmlFor="nacionality">Nacionalidade</label>
            </p>
            <input type="text" name="nacionality" id="nacionality" required defaultValue={teachers?.nacionality} />
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <p className="py-1">
              <label htmlFor="bornPlace">Província</label>
            </p>
            <input type="text" name="province" id="born-place" required defaultValue={teachers?.province} />
          </div>
          <div>
            <label htmlFor="" className="mt-2 block">
              Gênero
            </label>
            <div>
              <label htmlFor="male">
                M{" "}
                <input
                  type="radio"
                  name="gender"
                  value="M"
                  id="male"
                  required
                  defaultChecked={teachers?.gender === "M"}
                />
              </label>
              <label htmlFor="male" className="mx-4">
                F{" "}
                <input
                  type="radio"
                  name="gender"
                  value="F"
                  id="male"
                  required
                  defaultChecked={teachers?.gender === "F"}
                />
              </label>
            </div>
          </div>
        </div>        
      </div>
      <div className="">
        <h3 className="text-xl font-light py-1">Formação</h3>
        <div className="flex-group flex gap-4">
          <div>
            <p className="py-1">
              <label htmlFor="formation">Área de Formação</label>
            </p>
            <input type="text" name="formation" id="formation" required defaultValue={teachers?.formation} />
          </div>
          <div>
            <p className="py-1">
              <label htmlFor="subject">Disciplina</label>
            </p>
            <select name="subject" id="subject" className="w-[200px]" defaultValue={teachers?.subject}>
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
            <p className="py-1">
              <label htmlFor="number">Conctato</label>
            </p>
            <input type="number" name="number" id="number" required defaultValue={teachers?.number} />
          </div>
        </div>
      </div>
      <button
        disabled={isLoading}
        className="bg-sky-500
                     hover:bg-sky-600 transition-all p-2
                      text-white disabled:bg-zinc-500 
                      w-full mt-4" >
        
        {teachers ? "Salvar alterações" : "Cadastrar Professor"}
      </button>
    </form>
  );
}
