import Image from 'next/image'
import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-700 dark:bg-slate-900 sm:px-10 lg:px-16">
      <Link href="/" aria-label="KloPilot Startseite">
        <Image
          src="/logo/logo1.svg"
          alt="KloPilot"
          width={160}
          height={40}
          className="block h-auto w-[140px] dark:hidden sm:w-[160px]"
          priority
        />
        <Image
          src="/logo/logo2.svg"
          alt="KloPilot"
          width={160}
          height={40}
          className="hidden h-auto w-[140px] dark:block sm:w-[160px]"
          priority
        />
      </Link>
      <ThemeToggle />
    </nav>
  )
}

export function NavbarMobile() {
  return (
    <nav className="flex items-center justify-between bg-brand-500 px-4 py-3 text-white">
      <Link href="/" aria-label="KloPilot Startseite">
        <Image
          src="/logo/logo5.svg"
          alt="KloPilot"
          width={120}
          height={29}
          className="h-auto max-w-[140px]"
          priority
        />
      </Link>
      <ThemeToggle tone="onBrand" />
    </nav>
  )
}
