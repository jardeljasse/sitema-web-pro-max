
import Teacher_Model from "@/models/teachersModel";
import { connectToDB } from "@/utils/DAO";
import { NextResponse } from "next/server";
import User from "@/models/userModel";
import DoubtsLesson_Model from "@/models/doubtsTabLessonModel";

export async function GET(request, {params}){
   try {
    await connectToDB();
    
    const doubts = await DoubtsLesson_Model.findById(params.id).populate({
        path: "user",
        model: "User",
    });
    //console.log(user)

    return NextResponse.json({doubts})
} catch (error) {
    return NextResponse.json(
        {message: "Ocorreu um erro tentando carregar as dúvidas  do(a) aluno(a) com o id: " + params.id},
        {status: 500}
    )
    
   }
}
export async function PATCH(request, {params}){
    try {
        await connectToDB();

        const body = await request.json()
        const doubts = await DoubtsLesson_Model.findByIdAndUpdate(params.id, {
            ...body,
            updatedAt: Date.now(),
        });// this 'id' it comes from ou route [id]

        return NextResponse.json({doubts})
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message: "Ocorreu um erro ao tentar responder a dúvida do aluno(a)!"},
            {status: 500}
        )
        
    }
}

export async function DELETE(request, {params}){
    try {
        await connectToDB();
        
        const doubtsDelete = await DoubtsLesson_Model.findByIdAndDelete(params.id)
        //console.log(user)
    
        return new NextResponse(null, {stauts: 204})
    } catch (error) {
        return NextResponse.json(
            {message: "Ocorreu um erro deletando a dúvida " + params.id},
            {status: 500}
        )
        
       }
}