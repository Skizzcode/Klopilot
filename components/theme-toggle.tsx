'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/theme-provider'

type ThemeToggleProps = {
  /** 'default' = light/dark navbar, 'onBrand' = sits on the teal mobile navbar */
  tone?: 'default' | 'onBrand'
}

export function ThemeToggle({ tone = 'default' }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  const toneClasses =
    tone === 'onBrand'
      ? 'border-white/30 bg-white/10 text-white hover:bg-white/20'
      : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-[1.25rem] border transition ${toneClasses}`}
      aria-label="Hell/Dunkel umschalten"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Hell/Dunkel umschalten</span>
    </button>
  )
}
