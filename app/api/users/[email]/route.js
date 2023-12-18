import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
   try {
    await connectToDB();
    
    const user = await User.findOne({email: params.email})
    console.log(user)

    return NextResponse.json({user})
} catch (error) {
    return NextResponse.json(
        {message: "Ocorreu um erro tentando carregar o Usuário " + params.email},
        {status: 500}
    )
    
   }
}