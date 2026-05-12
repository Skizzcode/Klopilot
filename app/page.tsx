import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Truck, ClipboardCheck, FileText, Camera, QrCode } from 'lucide-react'
import { SectionTitle } from '@/components/SectionTitle'
import { StatusChip } from '@/components/StatusChip'
import { MockQRCode } from '@/components/MockQRCode'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10 sm:px-10 lg:px-16 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <section className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-brand-100/90 px-5 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-brand-700 shadow-sm ring-1 ring-brand-100 dark:bg-brand-900/50 dark:text-brand-300 dark:ring-brand-800">
              Demo für kleine Vermieter
            </span>
            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
              Die einfache Dispo-App für kleine mobile Toilettenvermieter
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Kabinenstandorte, Fahrer-Touren, Service-Nachweise und Abholungen in einer einfachen QR-App — ohne großes Rental-ERP.
            </p>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link href="/demo" className="inline-flex items-center justify-center rounded-[1.75rem] bg-brand-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-brand-500/10 transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 dark:shadow-brand-500/20">
                Demo ansehen
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
              <Link href="/dashboard" className="inline-flex items-center justify-center rounded-[1.75rem] border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700">
                Pilotbetrieb werden
              </Link>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-800">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Status</p>
                <p className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">WC-042 · Service heute</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-800">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Abholung</p>
                <p className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">WC-088 · 16:00</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-700 dark:bg-slate-800">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Nachweis</p>
                <p className="mt-4 text-lg font-semibold text-slate-950 dark:text-white">Foto-Nachweis vorhanden</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-white p-8 shadow-soft sm:p-10 dark:border-slate-700 dark:bg-slate-800">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-hero-gradient blur-3xl dark:opacity-50" />
            <div className="relative grid gap-6">
              <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-soft dark:bg-slate-700">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
                  <span>Dashboard</span>
                  <span>09:24</span>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.75rem] bg-slate-900 p-5 ring-1 ring-white/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Kabinen heute</p>
                    <p className="mt-4 text-4xl font-semibold">12</p>
                  </div>
                  <div className="rounded-[1.75rem] bg-slate-900 p-5 ring-1 ring-white/10">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Offene Jobs</p>
                    <p className="mt-4 text-4xl font-semibold">4</p>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] bg-slate-100 p-6 shadow-inner">
                <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
                  <span>Fahrer-Tour</span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-500">Mehmet</span>
                </div>
                <div className="mt-5 rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold text-slate-900">WC-042</p>
                  <p className="mt-1 text-base text-slate-600">Reinigen + Leeren</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.28em] text-slate-400">Baustelle Müller</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <MapPin className="mx-auto h-6 w-6 text-brand-500" />
                  <p className="mt-4 text-sm font-semibold text-slate-950">Standorte</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <ClipboardCheck className="mx-auto h-6 w-6 text-brand-500" />
                  <p className="mt-4 text-sm font-semibold text-slate-950">Service</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 text-center shadow-sm">
                  <QrCode className="mx-auto h-6 w-6 text-brand-500" />
                  <p className="mt-4 text-sm font-semibold text-slate-950">QR-Code</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <SectionTitle title="Wenn Excel, WhatsApp und Telefon jeden Morgen die Dispo machen" />
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { title: 'Wo steht welche Kabine?', description: 'Jeden Morgen aufs Neue suchen und spät dran sein.' },
              { title: 'Wurde heute wirklich gereinigt?', description: 'Unklar, ob der Fahrer alle Nachweise im Kopf hat.' },
              { title: 'Welche Abholung ist noch offen?', description: 'Offene Aufträge verstreuen sich über WhatsApp und Zettel.' }
            ].map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionTitle title="Ein Ablauf. Drei einfache Schritte." />
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { label: '1', title: 'Kabine bekommt QR-Code', icon: QrCode },
              { label: '2', title: 'Fahrer bekommt Tagesliste', icon: Truck },
              { label: '3', title: 'Büro sieht Status & Nachweise', icon: FileText }
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-sm font-semibold text-slate-900">{item.label}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 bg-slate-950 text-white shadow-soft ring-1 ring-white/10">
          <div className="rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),transparent_30%),linear-gradient(180deg,_rgba(15,23,42,0.98),rgba(15,23,42,0.9))] p-10 sm:p-14">
            <div className="max-w-4xl">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Gebaut für kleine Anbieter, nicht für Konzern-ERP</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Baustellen-WCs, Event-Toiletten, Toilettenwagen und Sanitärcontainer</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">Regionaler Vermieter mit 20–300 Kabinen? KloPilot konzentriert sich auf das, was wirklich zählt: Übersicht, Touren, Nachweis.</p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {['Baustellen-WCs', 'Event-Toiletten', 'Toilettenwagen', 'Sanitärcontainer', 'regionale Vermieter'].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm font-semibold text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <SectionTitle title="Features, die kleine Teams sofort nutzen" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Kabinenverwaltung',
              'Fahrer-Touren',
              'Service abhaken',
              'Foto/Notiz bei Problemen',
              'Abholungen planen',
              'Tagesbericht exportieren',
              'QR-Asset-Tag mit Backup-Nummer',
              'einfache Statusübersicht'
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-soft sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_0.6fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-brand-700">Pilotangebot</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Pilotangebot für die ersten 3 Betriebe</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">Wir bauen KloPilot gemeinsam mit echten Toilettenvermietern am echten Ablauf.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-sm text-slate-500">Setup</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">ab 149 €</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-sm text-slate-500">Pilotmonat</p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">79 €/Monat</p>
                </div>
              </div>
              <p className="mt-6 text-slate-600">Start klein: 20 Kabinen, 1 Fahrer, 14 Tage Test.</p>
            </div>
            <div className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-lg">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Pilot</p>
              <p className="text-2xl font-semibold">Pilotgespräch anfragen</p>
              <p className="text-sm leading-6 text-slate-300">Perfekt vorbereitet für den ersten Termin mit dem Fahrer und dem Büro.</p>
              <a href="/demo" className="inline-flex w-full items-center justify-center rounded-2xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700">
                Pilotgespräch anfragen
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
