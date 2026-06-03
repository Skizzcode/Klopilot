import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, QrCode, ClipboardCheck, MonitorSmartphone, Check } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { ContactForm } from '@/components/ContactForm'
import { getPexelsImage } from '@/lib/pexels'

export const metadata: Metadata = {
  title: 'KloPilot — Dispo-App für Toilettenvermieter',
  openGraph: { images: ['/logo/logo3.svg'] },
}

const problems = [
  { emoji: '📍', title: 'Wo steht welche Kabine?', description: 'Jeden Morgen aufs Neue suchen, telefonieren und trotzdem spät dran sein.' },
  { emoji: '🧹', title: 'Wurde heute gereinigt?', description: 'Kein Nachweis, kein Foto — und beim Kunden steht die Frage im Raum.' },
  { emoji: '📱', title: 'WhatsApp-Chaos jeden Morgen', description: 'Aufträge verstreuen sich über Chats, Zettel und Zurufe in der Halle.' },
]

const steps = [
  { number: '1', title: 'QR-Code scannen', description: 'Jede Kabine hat einen QR-Tag mit Backup-Nummer. Fahrer scannt vor Ort.', icon: QrCode },
  { number: '2', title: 'Status melden', description: 'Gereinigt, geleert, Problem? Mit einem Tipp inkl. Foto-Nachweis erledigt.', icon: ClipboardCheck },
  { number: '3', title: 'Büro sieht alles live', description: 'Touren, Nachweise und offene Abholungen — in Echtzeit auf einem Schirm.', icon: MonitorSmartphone },
]

const plans = [
  {
    name: 'Small',
    price: '79',
    capacity: 'bis 30 Kabinen',
    features: ['1 Fahrer', 'Dashboard & Touren', 'QR-Service-Nachweis', 'E-Mail Support'],
    highlighted: false,
  },
  {
    name: 'Medium',
    price: '149',
    capacity: 'bis 100 Kabinen',
    features: ['bis 3 Fahrer', 'Alles aus Small', 'Foto-Nachweise & Notizen', 'Tagesbericht-Export'],
    highlighted: true,
  },
  {
    name: 'Large',
    price: '249',
    capacity: '100+ Kabinen',
    features: ['unbegrenzt Fahrer', 'Alles aus Medium', 'Prioritäts-Support', 'Onboarding vor Ort'],
    highlighted: false,
  },
]

export default async function HomePage() {
  const hero = await getPexelsImage('construction site workers germany')

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Navbar />

      {/* HERO — inline styles for critical dimensions, Tailwind JIT can't guarantee arbitrary values */}
      <section
        className="relative flex items-center bg-slate-900 bg-cover bg-center"
        style={{
          minHeight: 'max(560px, 80vh)',
          ...(hero ? { backgroundImage: `url('${hero.url}')` } : {}),
        }}
      >
        {/* gradient fallback wenn kein Pexels-Bild */}
        {!hero && (
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(circle at top left, rgba(29,158,117,0.5), transparent 55%), linear-gradient(180deg, #1A1A2E, #0f172a)' }}
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.52)' }} />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white ring-1 ring-white/20" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>
              Dispo für mobile Toilettenvermieter
            </span>
            <h1
              className="mt-8 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
              style={{ lineHeight: 1.05 }}
            >
              Ordnung in jede Tour.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-200 sm:text-2xl">
              Schluss mit WhatsApp-Dispo. KloPilot bringt Ordnung in jede Tour.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 rounded-[1.75rem] bg-white px-7 py-4 text-base font-semibold text-slate-900 shadow-soft transition hover:bg-slate-100"
              >
                Demo ansehen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#pilot"
                className="inline-flex items-center justify-center rounded-[1.75rem] bg-brand-500 px-7 py-4 text-base font-semibold text-white shadow-soft transition hover:bg-brand-700"
              >
                Pilotbetrieb werden
              </Link>
            </div>
          </div>
        </div>

        {hero && (
          <a
            href={hero.photographerUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 right-4 rounded-full px-3 py-1 text-xs text-white/70 transition hover:text-white"
            style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
          >
            Foto: {hero.photographer} / Pexels
          </a>
        )}
      </section>

      {/* PROBLEM */}
      <section className="bg-slate-50 px-6 py-20 dark:bg-slate-900 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700 dark:text-brand-300">Das Problem</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Excel, WhatsApp und Telefon machen die Dispo
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {problems.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-soft dark:border-slate-700 dark:bg-slate-800"
              >
                <span style={{ fontSize: '2.5rem', lineHeight: 1 }}>{item.emoji}</span>
                <h3 className="mt-6 text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WIE ES FUNKTIONIERT */}
      <section className="bg-white px-6 py-20 dark:bg-slate-950 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700 dark:text-brand-300">So funktioniert es</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Ein Ablauf. Drei Schritte.
            </h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-brand-50 text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
                  <step.icon className="h-6 w-6" />
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-700 dark:text-brand-300">Schritt {step.number}</p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-slate-50 px-6 py-20 dark:bg-slate-900 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-700 dark:text-brand-300">Preise</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Ein Paket, das mitwächst
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Alle Pakete: einmalig 149 € Setup. Monatlich kündbar.</p>
          </div>
          <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={
                  plan.highlighted
                    ? 'relative rounded-[2rem] bg-brand-500 p-8 text-white shadow-soft ring-1 ring-brand-500'
                    : 'rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800'
                }
                style={plan.highlighted ? { transform: 'translateY(-1rem)' } : undefined}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-slate-950 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                    Beliebt
                  </span>
                )}
                <p className={plan.highlighted ? 'text-sm font-semibold uppercase tracking-widest text-brand-100' : 'text-sm font-semibold uppercase tracking-widest text-brand-700 dark:text-brand-300'}>
                  {plan.name}
                </p>
                <div className="mt-4 flex items-end gap-1">
                  <span className={plan.highlighted ? 'text-5xl font-bold text-white' : 'text-5xl font-bold text-slate-950 dark:text-white'}>{plan.price} €</span>
                  <span className={plan.highlighted ? 'mb-1 text-brand-100' : 'mb-1 text-slate-500 dark:text-slate-400'}>/Monat</span>
                </div>
                <p className={plan.highlighted ? 'mt-2 text-brand-100' : 'mt-2 text-slate-600 dark:text-slate-300'}>{plan.capacity}</p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className={plan.highlighted ? 'flex items-center gap-3 text-white' : 'flex items-center gap-3 text-slate-700 dark:text-slate-300'}>
                      <Check className={plan.highlighted ? 'h-5 w-5 shrink-0 text-brand-100' : 'h-5 w-5 shrink-0 text-brand-500'} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#pilot"
                  className={
                    plan.highlighted
                      ? 'mt-10 inline-flex w-full items-center justify-center rounded-[1.75rem] bg-white px-6 py-4 text-sm font-semibold text-brand-700 transition hover:bg-slate-100'
                      : 'mt-10 inline-flex w-full items-center justify-center rounded-[1.75rem] bg-brand-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-700'
                  }
                >
                  Pilotbetrieb werden
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — inline bg weil bg-[#1A1A2E] arbiträrer Hex-Wert */}
      <section id="pilot" className="px-6 py-20 sm:px-10 lg:px-16" style={{ backgroundColor: '#1A1A2E' }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-300">Pilotangebot</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Bereit für den Pilot?</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Wir starten klein: 20 Kabinen, 1 Fahrer, 14 Tage Test. Hinterlasse Kontakt — wir melden uns für ein kurzes Pilotgespräch.
          </p>
          <div className="mt-10 text-left">
            <ContactForm />
          </div>
          <p className="mt-6 text-sm text-slate-400">Setup einmalig 149 € · ab 79 €/Monat · monatlich kündbar</p>
        </div>
      </section>
    </main>
  )
}
