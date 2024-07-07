"use client"
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({children, session}){
    return(
        <html>
            <head>
                <title>PLATFORM-SEN-AUDITIVE-CREI-24</title>                
                <link rel="icon" href="favicon.ico" />
            </head>

            {/* Providor de sessao que sera acessado por toda a nossa aplicacao jjj*/}
            <SessionProvider session={session}>
            <body>
                {children}
            </body>
            </SessionProvider>
        </html>
    )
}