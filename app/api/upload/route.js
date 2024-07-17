import Lesson_Model from "@/models/lessonModel";
import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import fsPromises from "fs/promises"
import { getServerSession } from "next-auth";
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

    try {
        await connectToDB();
        const body = {
            title,
            description,
            file: filename,
        }
    
        const session = await getServerSession();
        const user = await User.findOne({
          email: session.user?.email
        });
    
        const lesson = await Lesson_Model.create({
          ...body,
          user: user._id,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        });
        console.log(body)
    
        return NextResponse.json(lesson, { status: 201 });
      } catch (error) {
        console.log(error);
        return NextResponse.json(
          { message: "Ocorreu um erro ao adicionar a aula TENTE NOVAMENTE: " },
          { status: 500 }
        );
      }

}