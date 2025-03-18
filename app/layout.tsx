import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import './globals.css'


export const metadata: Metadata = {
  title: 'Chetan Saini',
  description: 'Portfolio Website of Chetan Saini',
}

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', 
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
