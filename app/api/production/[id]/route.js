import Production_Model from "@/models/productionDailyModel";
import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
   try {
    await connectToDB();
    
    const production = await Production_Model.findById(params.id).populate({
        path: "user",
        model: "User",
    });
    //console.log(user)

    return NextResponse.json({production})
} catch (error) {
    return NextResponse.json(
        {message: "Ocorreu um erro tentando carregar uma produção com o id: " + params.id},
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