import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'

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
    <html lang="es">
      <body className={font.className}>{children}</body>
    </html>
  )
}
