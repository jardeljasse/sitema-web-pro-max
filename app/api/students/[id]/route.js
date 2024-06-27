
import { connectToDB } from "@/utils/DAO";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import Student_Model from "@/models/studentsModel";

export async function GET(request, {params}){
   try {
    await connectToDB();
    
    const students = await Student_Model.findById(params.id).populate({
        path: "user",
        model: "User",
    });
    //console.log(user)

    return NextResponse.json({students})
} catch (error) {
    return NextResponse.json(
        {message: "Ocorreu um erro tentando carregar os dados do aluno(a) com o id: " + params.id},
        {status: 500}
    )
    
   }
}
export async function PATCH(request, {params}){
    try {
        await connectToDB();

        const body = await request.json()
        const students = await Student_Model.findByIdAndUpdate(params.id, {
            ...body,
            updatedAt: Date.now(),
        });// this 'id' it comes from ou route [id]

        return NextResponse.json({students})
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message: "Ocorreu um erro alterando os dados do aluno(a) com o Email -" + params.id},
            {status: 500}
        )
        
    }
}
export async function DELETE(request, {params}){
    try {
        await connectToDB();
        
        const production = await Student_Model.findByIdAndDelete(params.id)
        //console.log(user)
    
        return new NextResponse(null, {stauts: 204})
    } catch (error) {
        return NextResponse.json(
            {message: "Ocorreu um erro ao eliminar o(a) aluno(a) com Identificador - " + params.id},
            {status: 500}
        )
        
       }
}