"use client"

export default function DoubtsForm({onSubmit, isLoading, doubts}) {

    // const [isLoading, setIsLoading] = useState(false)
    return (
        <div>
            <form action="" onSubmit={onSubmit}>
                <textarea required name="doubt" id="doubt" rows={8} className="w-full text-xl"
                defaultValue={doubts?.doubt}></textarea>
                <button
                    disabled={isLoading}
                    className="bg-skin-cl100 hover:bg-skin-cl900 transition-all p-2 text-white disabled:bg-skin-cl700 w-full mt-6 rounded-lg">
                    {doubts ? "Enviar" : "Responder"}
                </button>
            </form>
        </div>
    )
}
