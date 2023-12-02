
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from "@/components/Sidebar"


export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <div className='relative'>
          <Sidebar />
        </div>
        
        <div></div>
      </body>
    </html>
  )
}
