import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import { Navbar } from './components/navbar/Navbar'
import { ThemeProvider } from "@/components/theme-provider"

import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

const font = Nunito({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Airbnb Clone',
  description: 'Clon de la aplicación web de Airbnb con Next.JS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="es" suppressHydrationWarning>
        <body className={font.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
