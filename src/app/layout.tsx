import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ModeProvider } from '@/context/ModeContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Sumedh Patkar',
  description: 'Software Engineer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  )
}
