export default function UserForm({ onSubmit, isLoading, user }) {
    return (
        <form className="max-w-md" onSubmit={onSubmit}>
            <div className="flex gap-4">
                <div className="form-group">
                    <label htmlFor="firstName">Nome</label>
                    <input type="text" name="firstName" id="firstName" required
                        defaultValue={user?.firstName} />
                    {/* 'user?.firstName' para verificar se existe o nome e colocar no campo */}
                </div>
                <div className="flex gap-4">
                <div className="form-group">
                    <label htmlFor="lastName">Apelido</label>
                    <input type="text" name="lastName" id="lastName" required
                        defaultValue={user?.lastName} />
                    {/* 'user?.firstName' para verificar se existe o nome e colocar no campo */}
                </div>
            </div>
            </div>            

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required defaultValue={user?.email} />
            </div>
            <div className="form-group">
                <label htmlFor="password">{user ? "Nova Password" : "Password"}</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    required={user ? undefined : true}
                    autoComplete="new-password" />
            </div>

            <div className="flex gap-4">
                <div className="form-group">
                    <label htmlFor="role">Função</label>
                    <select name="role" id="role" className="w-full cursor-pointer"
                        defaultValue={user?.role}>
                        <option value="user">Usuário</option>
                        <option value="admin">Administrador</option>
                        <option value="student">Aluno</option>
                        <option value="teacher">Professor</option>
                    </select>
                </div>
            </div>
            <button
                disabled={isLoading}
                className="bg-sky-500
                     hover:bg-sky-600 transition-all p-2
                      text-white disabled:bg-zinc-500 
                      w-full">
                {user ? "Salvar alterações" : "Criar Usuário"}
            </button>
        </form>
    )
}