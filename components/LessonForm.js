import React from 'react'

export default function LessonForm() {
    return (
        <>
            <form action="">
                <div className="form-lesson-container">
                    <div>
                         <p><label htmlFor="title">Título</label></p>
                         <input type="text" required />
                         <p><label htmlFor="description">Descrição</label></p>
                         <textarea name="description" id="description" cols="30" rows="10"></textarea> 
                    </div>
                </div>
                <button>
                    Adicionar
                </button>
            </form>
        </>
    )
}
