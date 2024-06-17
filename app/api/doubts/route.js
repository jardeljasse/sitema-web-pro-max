import DoubtsLesson_Model from "@/models/doubtsTabLessonModel";
import Student_Model from "@/models/studentsModel";
import Teacher_Model from "@/models/teachersModel";
import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectToDB();

    const doubts = await DoubtsLesson_Model.find();
    // console.log(users)

    return NextResponse.json({ doubts });
  } catch (error) {
    return NextResponse.json(
        {message: "Ocorreu um erro ao tentar visulalizar a lista das dúvidas!"},
        {status: 500})
  }
}

export async function POST(request) {
  try {
    await connectToDB();
    const body = await request.json();

    const session = await getServerSession();
    const user = await User.findOne({
        email: session.user?.email
    });

    const teacher = await DoubtsLesson_Model.create({
      ...body,
      user: user._id,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    console.log(body)

    return NextResponse.json(teacher, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Ocorreu um erro ao cadastrar o aluno " },
      { status: 500 }
    );
  }
}
