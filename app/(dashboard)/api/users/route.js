
import User from "@/models/userModel";
import { connectToDB } from "@/utils/DAO";


import { NextResponse } from "next/server";

export async function GET(request){
   
    await connectToDB()
   
    // const users = await db.collection("test").find().toArray()
    // console.log(users)

   const data = {
    firstName: "Jardel",
    lastName: "Jasse",
    email: "jarjasse@gmail.com",
    password: "12345678",
    birthday: "2002-06-13",
    gender: "M",
    phone: "811111111",
    role: "admin"
   }

   const user = await User.create({
    ...data,
    createdAt: Date.now(),
    updatedAt: Date.now(),
});


return NextResponse(JSON.stringify(user));
console.log(user)
//return NextResponse.json(user);


} 