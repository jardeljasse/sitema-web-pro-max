"use client"

import { SessionProvider } from "next-auth/react";


  export default function RootLayout({ children, session }) {
    return (
      <html lang="pt">
        <head>
            <title>Portal dos alunos</title>
        </head>
        <SessionProvider session={session}>
            <body>
                {children}
            </body>
            </SessionProvider>
      </html>
    );
  }
  