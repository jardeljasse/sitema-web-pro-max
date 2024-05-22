import Student_Model from "@/models/studentsModel";
import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectToDB();

    const students = await Student_Model.find();
    // console.log(users)

    return NextResponse.json({ students });
  } catch (error) {
    return NextResponse.json(
        {message: "Ocorreu um erro ao tentar visulalizar a lista dos alunos!"},
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

    const student = await Student_Model.create({
      ...body,
      user: user._id,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    console.log(body)

    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Ocorreu um erro ao cadastrar o aluno " },
      { status: 500 }
    );
  }
}
