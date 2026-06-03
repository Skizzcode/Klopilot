import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'

export const metadata: Metadata = {
  title: 'KloPilot',
  description: 'Die einfache Dispo-App für mobile Toilettenvermieter',
  icons: {
    icon: '/logo/logo3.svg',
    apple: '/logo/logo3.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="light" storageKey="klopilot-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
