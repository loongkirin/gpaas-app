import './globals.css'
import type { Metadata } from 'next'

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
      <body>{children}</body>
    </html>
  )
}
