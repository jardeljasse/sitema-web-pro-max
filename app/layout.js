"use client"
import "./globals.css";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({children, session}){
    return(
        <html>
            <head>
                <title>Sistema Web Pro Max</title>
            </head>

            {/* Providor de sessao que sera acessado por toda a nossa aplicacao*/}
            <SessionProvider session={session}>
            <body>
                {children}
            </body>
            </SessionProvider>
        </html>
    )
}