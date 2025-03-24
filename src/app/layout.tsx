import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600"] })

export const metadata: Metadata = {
  title: 'ProMax Education',
  description: 'Eng muhim maqsadlaringizni amalga oshirish uchun ProMax Education bilan tanishing',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={poppins.className} >{children}</body>
    </html>
  )
}
