import Lesson_Model from "@/models/lessonModel";
import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
    try {
     await connectToDB();
     
     const lessons = await Lesson_Model.findById(params.id).populate({
         path: "user",
         model: "User",
     });
     //console.log(user)
 
     return NextResponse.json({lessons})
 } catch (error) {
     return NextResponse.json(
         {message: "Ocorreu um erro tentando carregar as aulas id: " + params.id},
         {status: 500}
     )
     
    }
 }

export async function DELETE(request, {params}){
    try {
        await connectToDB();
        
        const lesssons = await Lesson_Model.findByIdAndDelete(params.id)
        //console.log(user)
    
        return new NextResponse(null, {stauts: 204})
    } catch (error) {
        return NextResponse.json(
            {message: "Ocorreu um erro ao remover a aula com o id " + params.id},
            {status: 500}
        )
        
       }
}