import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"

import { ClerkProvider } from '@clerk/nextjs'
import ClientOnly from '@/components/ClientOnly'
import ToasterProvider from './providers/ToasterProvider'


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
            <ClientOnly>
              <ToasterProvider />
              {children}
            </ClientOnly>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
