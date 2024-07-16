import formidable, { errors as formidableErrors } from "formidable";
import { promises as fs } from "fs"
import path from "path"


export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "Method not allowed" })
    }

    const form = formidable({ multiples: true });
    let fields;
    let files;

    try {
        [fields, files] = await form.parse(req);
        console.log('files ', files)
        const imageFile = files.file[0];
        console.log('imageFile ', imageFile)
        if (!imageFile || !imageFile.filepath) {
            return res.status(400).json({ message: "Sem nenhuma imagem selecionada" })
        }

        const uploadDir = path.join(process.cwd(), 'public', 'uploads')

        //create the upload directory if doesn't exist
        await fs.mkdir(uploadDir, { recursive: true })

        const uniqueSuffix = Date.now() + " - " + Math.round(Math.random() * le9)
        const newFileName = $`{uniqueSuffix}-${imageFile.originalFilename}`
        const newFilePath = $`{uploadDir}/${newFileName}`

        await fs.rename(imageFile.filepath, newFilePath)
        console.log("Upload image: ", newFilePath)

        res.status(200).json({ message: "Upload sucedido", imageUrl: `/uplods/${newFileName}` })

    } catch (error) {
        console.error("Upload falhou", error)
        res.status(500).json({message: "Falha no upload"})
    }
}
