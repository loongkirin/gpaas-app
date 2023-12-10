import './globals.css'
import type { Metadata } from 'next'
import AuthContext from '@/context/AuthContext'
import ToasterContext from '@/context/ToasterContext'
import { ThemeContextProvider } from '@/context/ThemeContext'
import { QueryContext } from '@/context/QueryContext'

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
      <body className='bg-primaryBg'>
        <QueryContext>
          <ThemeContextProvider>
            <AuthContext>
              <ToasterContext />
              {children}
            </AuthContext>
          </ThemeContextProvider>
        </QueryContext>
      </body>
    </html>
  )
}