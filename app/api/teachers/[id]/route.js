
import Teacher_Model from "@/models/teachersModel";
import { connectToDB } from "@/utils/DAO";
import { NextResponse } from "next/server";
import User from "@/models/userModel";

export async function GET(request, {params}){
   try {
    await connectToDB();
    
    const teachers = await Teacher_Model.findById(params.id).populate({
        path: "user",
        model: "User",
    });
    //console.log(user)

    return NextResponse.json({teachers})
} catch (error) {
    return NextResponse.json(
        {message: "Ocorreu um erro tentando carregar os dados do professor(a) com o id: " + params.id},
        {status: 500}
    )
    
   }
}
export async function PATCH(request, {params}){
    try {
        await connectToDB();

        const body = await request.json()
        const production = await Production_Model.findByIdAndUpdate(params.id, {
            ...body,
            updatedAt: Date.now(),
        });// this 'id' it comes from ou route [id]

        return NextResponse.json({production})
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message: "Ocorreu um erro alterando a produção com o Id: -" + params.id},
            {status: 500}
        )
        
    }
}
export async function DELETE(request, {params}){
    try {
        await connectToDB();
        
        const production = await Production_Model.findByIdAndDelete(params.id)
        //console.log(user)
    
        return new NextResponse(null, {stauts: 204})
    } catch (error) {
        return NextResponse.json(
            {message: "Ocorreu um erro deletando a produção " + params.id},
            {status: 500}
        )
        
       }
}