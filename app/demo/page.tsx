import Link from 'next/link'
import { ArrowRight, FileText, Home, MapPin, Truck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { SectionTitle } from '@/components/SectionTitle'

const demoItems = [
  { title: 'Büro-Dashboard öffnen', description: 'Live-Überblick über vermietete Kabinen, offene Jobs, Abholungen und gemeldete Probleme.', href: '/dashboard', icon: Home, cta: 'Starte hier' },
  { title: 'Kabine WC-042 ansehen', description: 'Detailseite mit Standort, Kunde, QR-Backup, Service-Historie und klaren Aktionsbuttons.', href: '/toilets/WC-042', icon: MapPin, cta: 'Kabine ansehen' },
  { title: 'Fahrer-Tour testen', description: 'Mobile Tagesliste für Fahrer mit nächstem Stop, Navigation, Joböffnung und Problemmeldung.', href: '/driver', icon: Truck, cta: 'Tour testen' },
  { title: 'Tagesbericht ansehen', description: 'Chef-Übersicht mit erledigten Jobs, offenen Punkten, Problemnotiz und Export-Aktionen.', href: '/report', icon: FileText, cta: 'Bericht ansehen' }
]

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />
      <div className="px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Demo-Hub" description="Schnell zu den wichtigsten Seiten: Büro, Fahrer, Kabine und Bericht." />
        <div className="grid gap-6 sm:grid-cols-2">
          {demoItems.map((item) => (
            <Link key={item.title} href={item.href} className="group flex min-h-64 flex-col justify-between overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:border-brand-300 hover:bg-brand-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-brand-700 dark:hover:bg-slate-800/80">
              <div className="flex items-start gap-5">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.75rem] bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
                  <item.icon className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              </div>
              <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-[1.75rem] bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition group-hover:bg-brand-700">
                {item.cta} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
        </div>
      </div>
    </main>
  )
}
