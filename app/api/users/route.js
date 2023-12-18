import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import { NextResponse } from "next/server";

//import { POST } from "../auth/[...nextauth]/route";
//puxando os dados na DB.
export async function GET(request) {
  try {
    await connectToDB();

    const users = await User.find();
    // console.log(users)

    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json(
        {message: "Ocorreu um erro ao tentar Listar os usuários"},
        {status: 500})
  }
}
//como queremos utilizar o metodo POST, deveremos exporta-lo
export async function POST(request) {
  try {
    await connectToDB();
    const body = await request.json();
    console.log(body);

    //adicionando a base de dados
    const user = await User.create({
      ...body,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Ocorreu um erro ao criar o usuario" },
      { status: 500 }
    );
  }
}
