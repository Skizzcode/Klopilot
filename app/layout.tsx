import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'

export const metadata: Metadata = {
  title: 'KloPilot – einfache Disposition für Toilettenvermieter',
  description: 'Mockup-Demo für KloPilot: Kabinenstandorte, Fahrer-Touren und Service-Nachweise in einer klaren App.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="light" storageKey="klopilot-theme">
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
