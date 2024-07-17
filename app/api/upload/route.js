import fsPromises from "fs/promises"
import { NextResponse } from "next/server";
import path from "path"

export const POST = async (request) => {

    const body = await request.formData();
    // console.log(body.get("title"), body.get("description"), body.get("file"))

    const title = body.get("title")
    const file = body.get("file")
    const description = body.get("description")
    const subject = body.get("subject")
    const trimester = body.get("trimester")

    const chunks = []
    const reader = file.stream().getReader()

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value)
    }

    const buffer = Buffer.concat(chunks);
    const filename = `${Date.now()}_${file.name}`;
    const filepath = `/../fileUpload/${filename}`;

    await fsPromises.writeFile(path.join(process.cwd(), filepath), buffer);


    // await fetch("/api/lessons", {
    //     method: "POST",
    //     body: JSON.stringify({ title, description, filename }),
    //     // body: JSON.stringify({ collectionName, data }),
    // }).then((res) => {
    //     if (!res.ok) {
    //         throw new Error("Ocorreu um erro ao adicionar a aula " + title)
    //     } else {
    //         return res.json()
    //     }
    // }).then((data) => {
    //     alert("Aula adicionada " + title + " com sucesso")
    //     setIsLoading(false)//desativar apos o cadastro
    //     router.push("/lesson")
    // }).catch(err => {
    //     alert("Ocorreu um erro ao adicionar a aula " + title + err)
    //     setIsLoading(false);
    // })

    return NextResponse.json({ message: "Upload Sucess" })

}