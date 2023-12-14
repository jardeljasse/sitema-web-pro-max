import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth/next";
import { connectToDB } from "@/utils/DAO";
import User from "@/models/userModel";
import bcrypt from "bcrypt"

export const nextAuthOptions = {
    session: {
        strategy: "jwc", //token do JSON - Json Web Tokens
    },
    providers: [CredentialsProvider({ 
        async authorize(credentials, request){
            const {email, password} = credentials; 
            await connectToDB();

            const user = await User.findOne({
                email: email.toLowerCase(),
            }).select("+password")
            

           if(!user || !(await bcrypt.compare(password, user.password))) return;
            
            // console.log(credentials)
            // console.log("entrou")

           return{
            email: user.email,
            name: user.firstName + " " + user.lastName,
            role: user.role,
           }
        },
    }),
],

};

const handler = NextAuth(nextAuthOptions)
export { handler as GET, handler as POST}