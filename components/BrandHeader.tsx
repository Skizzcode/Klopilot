import Image from 'next/image'
import Link from 'next/link'

type BrandHeaderProps = {
  className?: string
}

export function BrandHeader({ className = '' }: BrandHeaderProps) {
  return (
    <header className={`mb-10 flex items-center ${className}`}>
      <Link
        href="/"
        className="inline-flex rounded-[1.25rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-900"
        aria-label="KloPilot Startseite"
      >
        <Image
          src="/logo/klopilot-light.svg"
          alt="KloPilot"
          width={160}
          height={40}
          priority
          className="h-10 w-auto dark:hidden"
        />
        <Image
          src="/logo/klopilot-dark.svg"
          alt="KloPilot"
          width={160}
          height={40}
          priority
          className="hidden h-10 w-auto dark:block"
        />
      </Link>
    </header>
  )
}
