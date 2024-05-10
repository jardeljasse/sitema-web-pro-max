export const metadata = {
  title: 'Plataforma de Estudo NEEA-CREI',
  description: 'Plataforma de Estudo',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
