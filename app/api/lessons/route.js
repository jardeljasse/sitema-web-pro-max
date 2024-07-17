import Lesson_Model from "@/models/lessonModel";
import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectToDB();
    const lessons = await Lesson_Model.find();
    return NextResponse.json({ lessons });
  } catch (error) {
    return NextResponse.json(
      { message: "Ocorreu um erro ao tentar listar as aulas!" },
      { status: 500 }
    )
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
