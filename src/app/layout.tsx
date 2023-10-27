import './globals.css'
import type { Metadata } from 'next'
import AuthContext from '@/context/AuthContext'
import ToasterContext from '@/context/ToasterContext'

export const metadata: Metadata = {
  title: 'GPaaS App',
  description: 'Go PaaS framework App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext/>
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
