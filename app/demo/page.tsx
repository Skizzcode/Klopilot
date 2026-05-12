import Link from 'next/link'
import { ArrowRight, ClipboardCheck, FileText, Home, MapPin, Truck } from 'lucide-react'
import { SectionTitle } from '@/components/SectionTitle'

const demoItems = [
  { title: 'Büro-Dashboard öffnen', description: 'Direkt sehen, was heute ansteht.', href: '/dashboard', icon: Home },
  { title: 'Kabine WC-042 ansehen', description: 'Detailseite mit QR-Backup und Historie.', href: '/toilets/WC-042', icon: MapPin },
  { title: 'Fahrer-Tour testen', description: 'Mobile Ansicht für den Fahrer.', href: '/driver', icon: Truck },
  { title: 'Tagesbericht ansehen', description: 'Report mit erledigten Jobs und Problemen.', href: '/report', icon: FileText }
]

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Demo-Hub" description="Schnell zu den wichtigsten Seiten: Büro, Fahrer, Kabine und Bericht." />
        <div className="grid gap-6 sm:grid-cols-2">
          {demoItems.map((item) => (
            <Link key={item.title} href={item.href} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:border-brand-300 hover:bg-brand-50">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-50 text-brand-700">
                  <item.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </div>
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                Öffnen <ArrowRight className="h-4 w-4" />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
