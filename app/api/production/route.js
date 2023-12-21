import Production_Model from "@/models/productionDailyModel";
import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request){
    
    try {
        
        await connectToDB();
        const body = await request.json();

        //getting the Users that made changes
        const session = await getServerSession();
        const user = await User.findOne({
            email: session.user?.email
        });

        //POSTING our production in the DataBase
        const production = await Production_Model.create({
             ...body,
             user: user._id,//getting the user
             createdAt: Date.now(),
             updatedAt: Date.now(),
         });
        console.log(body);

        //sendig the 'response' to the Frontend
        return NextResponse.json(production, {status: 201});
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {message: "Ocorreu um erro adicionando a produção do dia"},
            {status: 500}
        );
    }

}