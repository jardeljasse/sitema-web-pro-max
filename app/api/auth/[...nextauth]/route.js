//"use client"

import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth/next";
import { connectToDB } from "@/utils/DAO";
import User from "@/models/userModel";
import bcrypt from "bcrypt"

export const nextAuthOptions = {
    session: {
        strategy: "jwt", //token do JSON - Json Web Tokens
    },
    secret: process.env.NEXTAUTH_SECRET,
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
],//modificando a 'session' para mudar o icon do usuario com a sua funcao
callbacks: {
    async jwt ({token, user}){
        user && (token.user = user)
        return token;
    },
    async session({session, token}){
        session.user.role = token.user.role;
        return session;
    }
},

};

const handler = NextAuth(nextAuthOptions)
export { handler as GET, handler as POST}