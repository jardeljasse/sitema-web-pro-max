import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import { NextResponse } from "next/server";

export async function GET(request, {params}){
   try {
    await connectToDB();
    
    const user = await User.findOne({email: params.email})
    //console.log(user)

    return NextResponse.json({user})
} catch (error) {
    return NextResponse.json(
        {message: "Ocorreu um erro tentando carregar o Usuário " + params.email},
        {status: 500}
    )
    
   }
}
export async function PATCH(request, {params}){
    try {
        await connectToDB();

        const body = await request.json()
        const user = await User.findOne({email: params.email})

        //para cada par desses valores que estao dentro do 'body'
        for (const [key, value] of Object.entries(body)){
            value ? (user[key] =  value) : null
        }
        user.updateAt = Date.now();

        await user.save();

        return NextResponse.json({user})
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                message: "Ocorreu um erro tentado Salvar as Alterções do usuário" + params.email},
            {status: 500}
        )
        
    }
}
export async function DELETE(request, {params}){
    try {
        await connectToDB();
        
        const user = await User.findOneAndDelete({email: params.email})
        //console.log(user)
    
        return new NextResponse(null, {stauts: 204})
    } catch (error) {
        return NextResponse.json(
            {message: "Ocorreu um erro deletando o Usuário " + params.email},
            {status: 500}
        )
        
       }
}